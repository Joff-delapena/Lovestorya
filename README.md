# LoveStorya foundation

This workspace contains the Firebase configuration and shared, persisted reading preferences for an Expo + React Native app. It does not include app screens or authentication.

## 1. Create and configure Firebase

1. In the [Firebase Console](https://console.firebase.google.com/), create a project. Google Analytics is optional for this foundation.
2. Register a **Web app** in the project settings. Expo uses the Firebase JavaScript SDK, so the web app's Firebase config is used by the iOS and Android JavaScript runtimes; native Firebase app registration is not required for this setup.
3. In **Build → Firestore Database**, create a database and choose its location. Configure and deploy production security rules before shipping. Do not use open test-mode rules in production.
4. In **Build → Storage**, get started and choose a bucket location. Follow the console's current plan and billing prompts, and configure Storage security rules before shipping.
5. Firestore and Storage are exported from `src/config/firebase.ts`. This foundation does not enable Authentication. Without an authenticated identity, security rules cannot reliably restrict writes to an individual story author; do not allow unrestricted client writes.

Firebase's client configuration is included in the app bundle, so it is not a secret. Firestore and Storage security rules—not hiding the API key—must protect your data.

## 2. Install dependencies and set environment variables

From the Expo project root, install the Firebase JavaScript SDK and AsyncStorage:

```sh
npm install firebase
npx expo install @react-native-async-storage/async-storage
```

Copy `.env.example` to `.env` and replace each placeholder with the matching value from **Project settings → Your apps → SDK setup and configuration**:

```sh
copy .env.example .env
```

Expo only exposes variables prefixed with `EXPO_PUBLIC_` to app code. Restart Expo after editing `.env`:

```sh
npx expo start
```

## 3. Firebase configuration

`src/config/firebase.ts` initializes the modular Firebase SDK once and exports:

- `db` — Cloud Firestore instance.
- `storage` — Firebase Storage instance.

Import these instances into service modules (for example, `import { db } from '../config/firebase'`). The module reports an explicit error at startup if any required environment variable is missing.

## 4. Reading preferences

Wrap the app once near its root (for example, in `App.tsx`) so screens share the same preference state:

```tsx
import { ReadingPreferencesProvider } from './src/hooks/useReadingPreferences';

export default function App() {
  return (
    <ReadingPreferencesProvider>
      {/* Place your navigation container here. */}
    </ReadingPreferencesProvider>
  );
}
```

Read and update preferences from any descendant:

```tsx
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useReadingPreferences } from '../hooks/useReadingPreferences';

function ReaderSettings() {
  const { preferences, updatePreferences, loading, error } =
    useReadingPreferences();

  if (loading) {
    return <ActivityIndicator accessibilityLabel="Loading reading preferences" />;
  }

  return (
    <View>
      <Pressable
        onPress={() =>
          updatePreferences({
            theme: preferences.theme === 'dark' ? 'light' : 'dark',
          })
        }
      >
        <Text>Theme: {preferences.theme}</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          updatePreferences({
            fontSize: Math.min(32, preferences.fontSize + 1),
          })
        }
      >
        <Text>Increase text size ({preferences.fontSize})</Text>
      </Pressable>
      {error ? <Text>Could not save reading preferences: {error.message}</Text> : null}
    </View>
  );
}
```

Defaults are light theme and 18-point text. Font sizes are accepted from 12 to 32. Changes are saved automatically to AsyncStorage under `@lovestorya/reading-preferences`. The provider exposes `loading` and `error`; show a loading indicator during hydration and surface `error` in the UI when loading or saving fails.

## 5. Suggested structure

```text
src/
  components/   Reusable UI such as story cards and shared controls
  config/       Firebase initialization and app configuration
  hooks/        Shared React hooks and providers
  navigation/   React Navigation navigators and route types
  screens/      Screen-level views
  services/     Firestore and Storage operations by domain
  types/        Shared TypeScript models and interfaces
  utils/        Small framework-independent helpers
```

Keep Firestore/Storage reads and writes in `services/`, and call those services from hooks or screens rather than embedding database logic in reusable visual components.

## 6. Verify the setup

1. Install the dependencies, configure `.env`, and start Expo. Firebase initialization should succeed; missing values produce an explicit configuration error.
2. Wrap the app in `ReadingPreferencesProvider` and render a screen using `useReadingPreferences`.
3. Wait until `loading` is false, change the theme or font size, and reload the app. The updated choices should be restored.
4. To verify Firestore and Storage connectivity, add a small service operation using `db` or `storage`, run it against your configured project, and inspect the resulting document/file in the Firebase Console. Ensure your deployed rules permit only the intended operation.
