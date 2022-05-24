import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const fbConfig = {
  apiKey: "AIzaSyD1lzNvJYMaSb3x0XKnm51x6lnJ_D3qvVg",
  authDomain: "my-web-tanlo.firebaseapp.com",
  projectId: "my-web-tanlo",
  storageBucket: "my-web-tanlo.appspot.com",
  messagingSenderId: "907200977139",
  appId: "1:907200977139:web:cfc10b7df7f298da933f86",
  measurementId: "G-DTJL9QKK2D"
}

export const fbApp = initializeApp(fbConfig);
export const fbAuth = getAuth(fbApp);

