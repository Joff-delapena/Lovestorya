import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  DEFAULT_READING_PREFERENCES,
  MAX_READING_FONT_SIZE,
  MIN_READING_FONT_SIZE,
  type ReadingPreferences,
} from '../types/readingPreferences';

const STORAGE_KEY = '@lovestorya/reading-preferences';

interface ReadingPreferencesContextValue {
  preferences: ReadingPreferences;
  loading: boolean;
  error: Error | null;
  updatePreferences: (updates: Partial<ReadingPreferences>) => void;
}

const ReadingPreferencesContext =
  createContext<ReadingPreferencesContextValue | undefined>(undefined);

function toError(cause: unknown): Error {
  return cause instanceof Error ? cause : new Error(String(cause));
}

function parsePreferences(value: string | null): ReadingPreferences {
  if (value === null) {
    return DEFAULT_READING_PREFERENCES;
  }

  const parsed: unknown = JSON.parse(value);
  if (typeof parsed !== 'object' || parsed === null) {
    return DEFAULT_READING_PREFERENCES;
  }

  const stored = parsed as Record<string, unknown>;
  return {
    theme: stored.theme === 'dark' ? 'dark' : 'light',
    fontSize:
      typeof stored.fontSize === 'number' &&
      Number.isFinite(stored.fontSize) &&
      stored.fontSize >= MIN_READING_FONT_SIZE &&
      stored.fontSize <= MAX_READING_FONT_SIZE
        ? stored.fontSize
        : DEFAULT_READING_PREFERENCES.fontSize,
  };
}

export function ReadingPreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [preferences, setPreferences] = useState<ReadingPreferences>(
    DEFAULT_READING_PREFERENCES,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [canPersist, setCanPersist] = useState(false);
  const pendingUpdates = useRef<Partial<ReadingPreferences>>({});
  const saveQueue = useRef<Promise<void>>(Promise.resolve());
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let active = true;

    async function loadPreferences() {
      try {
        const stored = parsePreferences(await AsyncStorage.getItem(STORAGE_KEY));
        if (active) {
          setPreferences({ ...stored, ...pendingUpdates.current });
          setCanPersist(true);
        }
      } catch (cause) {
        if (active) {
          setError(toError(cause));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadPreferences();
    return () => {
      active = false;
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (loading || !canPersist) {
      return;
    }

    const serialized = JSON.stringify(preferences);
    saveQueue.current = saveQueue.current
      .then(() => AsyncStorage.setItem(STORAGE_KEY, serialized))
      .catch((cause: unknown) => {
        if (mounted.current) {
          setError(toError(cause));
        }
      });
  }, [canPersist, loading, preferences]);

  const updatePreferences = useCallback(
    (updates: Partial<ReadingPreferences>) => {
      pendingUpdates.current = { ...pendingUpdates.current, ...updates };
      setPreferences((current) => ({ ...current, ...updates }));
      setError(null);
      setCanPersist(true);
    },
    [],
  );

  return (
    <ReadingPreferencesContext.Provider
      value={{ preferences, loading, error, updatePreferences }}
    >
      {children}
    </ReadingPreferencesContext.Provider>
  );
}

export function useReadingPreferences(): ReadingPreferencesContextValue {
  const context = useContext(ReadingPreferencesContext);
  if (context === undefined) {
    throw new Error(
      'useReadingPreferences must be used within a ReadingPreferencesProvider.',
    );
  }
  return context;
}
