// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFGL3yCnlAJGbbVhtsqOCGdYnpQ73joG0',
  authDomain: 'test-react-firebase-12109.firebaseapp.com',
  databaseURL: 'https://test-react-firebase-12109.firebaseio.com',
  projectId: 'test-react-firebase-12109',
  storageBucket: 'test-react-firebase-12109.appspot.com',
  messagingSenderId: '497832722708',
  appId: '1:497832722708:web:a19ad83fbae45acae10201',
  measurementId: 'G-CVTNSLQB06',
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
