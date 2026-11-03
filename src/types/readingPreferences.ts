export type ReadingTheme = 'light' | 'dark';

export interface ReadingPreferences {
  theme: ReadingTheme;
  fontSize: number;
}

export const DEFAULT_READING_PREFERENCES: ReadingPreferences = {
  theme: 'light',
  fontSize: 18,
};

export const MIN_READING_FONT_SIZE = 12;
export const MAX_READING_FONT_SIZE = 32;
