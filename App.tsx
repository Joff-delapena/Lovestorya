import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';
import { ReadingPreferencesProvider } from './src/hooks/useReadingPreferences';
import { useReadingPreferences } from './src/hooks/useReadingPreferences';
import { HomeScreen } from './src/screens/HomeScreen';
import { ReaderScreen } from './src/screens/ReaderScreen';
import { StoryDetailsScreen } from './src/screens/StoryDetailsScreen';
import type { Story } from './src/types/story';

const SPLASH_MINIMUM_DURATION_MS = 3000;

function AppContent() {
  const [fontsLoaded, fontError] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
  });
  const { preferences, loading: preferencesLoading, updatePreferences } =
    useReadingPreferences();
  const [splashDurationElapsed, setSplashDurationElapsed] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [readingStory, setReadingStory] = useState(false);
  const titleFontFamily = fontsLoaded ? 'Lora_700Bold' : 'serif';
  const readingFontFamily = fontsLoaded ? 'Lora_400Regular' : 'serif';
  const appReady =
    (fontsLoaded || fontError !== null) &&
    !preferencesLoading &&
    splashDurationElapsed;

  useEffect(() => {
    const timer = setTimeout(
      () => setSplashDurationElapsed(true),
      SPLASH_MINIMUM_DURATION_MS,
    );

    return () => clearTimeout(timer);
  }, []);

  if (!appReady) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('./assets/lovestorya-logo.png')}
          accessibilityRole="image"
          accessibilityLabel="LoveStorya loading"
          resizeMode="contain"
          style={styles.splashLogo}
        />
        <View style={styles.loading}>
          <ActivityIndicator
            size="small"
            color="#74152F"
            accessibilityLabel="Loading LoveStorya"
          />
          <Text style={styles.loadingText}>Loading your stories...</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={preferences.theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={{ flex: 1 }}>
        {fontError ? (
          <View
            accessibilityRole="alert"
            style={{
              backgroundColor: '#FBE6EC',
              paddingHorizontal: 16,
              paddingVertical: 8,
            }}
          >
            <Text style={{ color: '#754254', fontSize: 12 }}>
              Could not load the custom typeface; using your device's serif font.
            </Text>
          </View>
        ) : null}
        <View style={{ flex: 1 }}>
          {selectedStory ? (
            readingStory ? (
              <ReaderScreen
                story={selectedStory}
                onBack={() => setReadingStory(false)}
                titleFontFamily={titleFontFamily}
                readingFontFamily={readingFontFamily}
              />
            ) : (
              <StoryDetailsScreen
                story={selectedStory}
                theme={preferences.theme}
                titleFontFamily={titleFontFamily}
                onRead={() => setReadingStory(true)}
                onBack={() => setSelectedStory(null)}
              />
            )
          ) : (
            <HomeScreen
              theme={preferences.theme}
              onToggleTheme={() =>
                updatePreferences({
                  theme: preferences.theme === 'dark' ? 'light' : 'dark',
                })
              }
              onSelectStory={setSelectedStory}
              titleFontFamily={titleFontFamily}
            />
          )}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ReadingPreferencesProvider>
      <AppContent />
    </ReadingPreferencesProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF6F0',
    paddingHorizontal: 24,
  },
  splashLogo: {
    width: '82%',
    maxWidth: 320,
    aspectRatio: 1,
  },
  loading: {
    alignItems: 'center',
    gap: 12,
    marginTop: -4,
  },
  loadingText: {
    color: '#806D6D',
    fontSize: 13,
  },
});
