import { FirebaseError, getApp, getApps, initializeApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

const missingConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfig.length > 0) {
  throw new Error(
    `Missing Firebase environment variables: ${missingConfig.join(', ')}. ` +
      'Check your local .env file and restart Expo.',
  );
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

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

export const db = getReactNativeFirestore();
export const storage = getStorage(app);

export default app;
