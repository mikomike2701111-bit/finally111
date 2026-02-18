'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Initializes Firebase SDKs. 
 * Includes a safety check for the API Key to prevent crashes during builds 
 * when environment variables might not be fully populated.
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp: FirebaseApp;

    // Check if we have at least the API Key before attempting manual initialization
    const hasConfig = !!firebaseConfig.apiKey;

    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      try {
        // Attempt automatic initialization (works on Firebase Hosting)
        firebaseApp = initializeApp();
      } catch (e) {
        if (hasConfig) {
          console.warn('Automatic initialization failed. Falling back to local config.');
          firebaseApp = initializeApp(firebaseConfig);
        } else {
          console.error('Firebase Configuration is missing! Please set your environment variables.');
          // Initialize with empty config to prevent hard crash, though services will fail
          firebaseApp = initializeApp(firebaseConfig);
        }
      }
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
