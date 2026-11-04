import {
  FirebaseError,
  getApp,
  getApps,
  initializeApp,
  type FirebaseApp,
} from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
  type Firestore,
} from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

declare const process: {
  env: Record<string, string | undefined>;
};

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

function isFirebaseConfigComplete(
  config: typeof firebaseConfig,
): config is Record<keyof typeof firebaseConfig, string> {
  return Object.values(config).every(
    (value) => typeof value === 'string' && value.length > 0,
  );
}

const missingConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

export const firebaseConfigError =
  missingConfig.length > 0
    ? new Error(
        `Missing Firebase environment variables: ${missingConfig.join(', ')}. ` +
          'Add them to the build environment and rebuild the app.',
      )
    : null;

const firebaseServices: {
  app: FirebaseApp | null;
  db: Firestore | null;
  storage: FirebaseStorage | null;
} = isFirebaseConfigComplete(firebaseConfig)
  ? (() => {
      const app =
        getApps().length > 0
          ? getApp()
          : initializeApp(firebaseConfig);

      function getReactNativeFirestore() {
        try {
          return initializeFirestore(app, {
            experimentalForceLongPolling: true,
          });
        } catch (cause) {
          if (
            cause instanceof FirebaseError &&
            cause.code === 'failed-precondition'
          ) {
            return getFirestore(app);
          }
          throw cause;
        }
      }

      return {
        app,
        db: getReactNativeFirestore(),
        storage: getStorage(app),
      };
    })()
  : { app: null, db: null, storage: null };

export const { app, db, storage } = firebaseServices;

export default app;
