
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
//FIREBASE//
const firebaseConfig2 = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  mesurentId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}
const appFb = initializeApp(firebaseConfig2);
const auth = getAuth(appFb);
const db = getFirestore(appFb);
const storage = getStorage(appFb);

export { auth, db, storage }