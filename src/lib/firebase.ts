import { initializeApp } from 'firebase/app';

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

export const initFirebase = () => initializeApp(firebaseConfig);
