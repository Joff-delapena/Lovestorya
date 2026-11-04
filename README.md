# LoveStorya foundation

This workspace contains an Expo + React Native app with a Firestore-backed Home/Discovery screen, Firebase configuration, and shared, persisted reading preferences. It does not include authentication.

## 1. Create and configure Firebase

1. In the [Firebase Console](https://console.firebase.google.com/), create a project. Google Analytics is optional for this foundation.
2. Register a **Web app** in the project settings. Expo uses the Firebase JavaScript SDK, so the web app's Firebase config is used by the iOS and Android JavaScript runtimes; native Firebase app registration is not required for this setup.
3. In **Build → Firestore Database**, create a database and choose its location. Configure and deploy production security rules before shipping. Do not use open test-mode rules in production.
4. In **Build → Storage**, get started and choose a bucket location. Follow the console's current plan and billing prompts, and configure Storage security rules before shipping.
5. Firestore and Storage are exported from `src/config/firebase.ts`. This foundation does not enable Authentication. Without an authenticated identity, security rules cannot reliably restrict writes to an individual story author; do not allow unrestricted client writes.

Firebase's client configuration is included in the app bundle, so it is not a secret. Firestore and Storage security rules—not hiding the API key—must protect your data.

## 2. Install dependencies and set environment variables

From the Expo project root, install the dependencies recorded in the project:

```sh
npm install
```

Create a `.env` file in the project root and add the values from **Project settings → Your apps → SDK setup and configuration**:

```sh
EXPO_PUBLIC_FIREBASE_API_KEY=your-api-key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.firebasestorage.app
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
EXPO_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Expo only exposes variables prefixed with `EXPO_PUBLIC_` to app code. Restart Expo after editing `.env`:

```sh
npx expo start
```

## 3. Firebase configuration

`src/config/firebase.ts` initializes the modular Firebase SDK once and exports:

- `db` — Cloud Firestore instance when Firebase is configured.
- `storage` — Firebase Storage instance when Firebase is configured.

Import these instances into service modules (for example, `import { db } from '../config/firebase'`). If Firebase variables are missing, the app still opens with its bundled sample stories, while Firebase-backed stories are unavailable and an error is shown in the library. For EAS builds, add the same `EXPO_PUBLIC_FIREBASE_*` variables to the EAS environment used by the build profile. Firestore is configured to use long polling for React Native network compatibility. If the SDK still reports that it cannot reach Firestore, check the device/emulator internet connection and confirm the configured values match the Firebase project's web app configuration.

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

## 5. Welcome screen

The app shows the supplied LoveStorya logo on its native launch screen and, if fonts or saved reading preferences are still loading, keeps the logo visible in the app until they are ready. It then opens the Home screen automatically. There is no separate welcome page or start button. The logo asset is `assets/lovestorya-logo.png`.

## 6. Home / Story discovery

The app starts in `App.tsx`, wraps the Home screen with `ReadingPreferencesProvider`, and subscribes to published stories from the Firestore `stories` collection. It includes stories bundled locally for offline reading: the thirty-chapter romance/drama `The Words I Couldn’t Say`, the forty-chapter Tagalog romance `Bawal Mahulog sa Kusina` featuring adult characters and playful romantic tension, and the thirty-chapter English long-distance romance `When We Finally Meet`, featuring two fictionalized partners who meet online, connect through Mobile Legends, and navigate distance and misunderstandings while planning to meet. The starter library also includes `Read This When You Need Me`, a twelve-letter fictionalized collection of supportive messages for moments of missing someone, feeling overwhelmed, overthinking, or needing reassurance. Personal names, exact locations, and identifying details have been anonymized. These bundled books are not written to Firestore. Tapping a story opens its details page with its cover, author, description, and a button to start reading. The visual direction uses a soft blush background with coral accents, a two-column book-cover shelf, and the bundled Lora serif typeface for story headings. The reader uses the same palette and Lora for chapter text. Title/author search, genre filters, latest-update ordering, theme toggle, and loading, error, and empty-library states remain available. The remote story feed remains read-only.

Add a document in the Firebase Console at **Firestore Database → Data → Start collection**:

- Collection ID: `stories`
- Document ID: choose **Auto-ID**
- Required fields:
  - `title` — string
  - `authorName` — string
  - `description` — string
  - `genre` — string
  - `published` — boolean (`true` to appear in discovery)
  - `updatedAt` — timestamp
- Optional field: `coverUrl` — string containing a publicly readable image URL

For example:

```text
title: "The Last Summer"
authorName: "Alex Writer"
description: "Two friends return to the town where their story began."
genre: "Romance"
published: true
updatedAt: [current timestamp]
```

Documents need a non-empty `title` and an `updatedAt` timestamp. The preferred feed query uses a composite index for `published` and `updatedAt`; its definition is in `firestore.indexes.json` and referenced by `firebase.json`. In the Firebase Console, confirm that the index is for the `stories` collection, has `published` ascending and `updatedAt` descending, and has finished building. The app falls back to a `published == true` query and sorts up to 50 results locally if Firestore reports that the composite index is missing. If the feed still shows a permission or connection error, review Firestore rules and device internet access. This screen only reads published documents and does not need write access. For example, inside your `match /databases/{database}/documents` block, allow public reads of published stories and keep writes disabled until author identity and ownership rules are implemented:

```text
match /stories/{storyId} {
  allow read: if resource.data.published == true;
  allow write: if false;
}
```

This makes published stories publicly readable. Storage cover URLs must also be readable under your Storage rules.

Tap any story card to open its reader. The reader loads the story's `chapters` subcollection in ascending `order`, supports previous/next navigation, and uses the saved theme and font size. To add a chapter in the Firebase Console, open a story document and create a subcollection named `chapters`. Each chapter document should have:

- `title` — string
- `content` — string (the chapter text; line breaks are preserved)
- `order` — number (start at `1`, then increment for each chapter)

For example:

```text
stories/{storyId}/chapters/{chapterId}
title: "The Beginning"
content: "The rain had just stopped...\n\nMara opened the old letter."
order: 1
```

Published story and chapter reads both need to be allowed by Firestore security rules. Rules do not cascade into subcollections; add an explicit chapter match. For example, alongside the story rule:

```text
match /stories/{storyId}/chapters/{chapterId} {
  allow read: if get(/databases/$(database)/documents/stories/$(storyId)).data.published == true;
  allow write: if false;
}
```

Run the app with `npm start`, or use `npm run android`, `npm run ios`, or `npm run web`. Story authoring and publishing are follow-up features.

## 7. Suggested structure

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

## 8. Verify the setup

1. Install the dependencies, configure `.env`, and start Expo. Firebase initialization should succeed; missing values produce an explicit configuration error.
2. The Home screen should show a friendly empty state until you add a published story document as described above.
3. Change the theme, reload the app, and confirm the preference is restored. Search and genre filters should narrow the story list.
4. Run `npm run typecheck` to validate TypeScript.
