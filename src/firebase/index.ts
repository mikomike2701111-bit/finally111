'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Initializes Firebase SDKs. 
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp: FirebaseApp;

    // Check if we have at least the API Key before attempting initialization
    if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'undefined') {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      // In build environments like Vercel, keys might be missing during pre-rendering.
      // We initialize with an empty shell to prevent hard crashes during build.
      console.warn('Firebase API Key is missing. Check your environment variables.');
      firebaseApp = initializeApp({ ...firebaseConfig, apiKey: 'MISSING_KEY' });
    }

    return getSdks(firebaseApp);
  }

  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './errors';
export * from './error-emitter';
