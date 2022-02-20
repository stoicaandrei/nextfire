import { ReactNode } from 'react';
import {
  FirebaseAppProvider,
  FirestoreProvider,
  AuthProvider as FirebaseAuthProvider,
  StorageProvider,
  useFirebaseApp,
} from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

type Props = {
  children: ReactNode;
};

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

export const FirebaseSDKProvider = ({ children }: Props) => {
  const app = useFirebaseApp();

  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <FirebaseAuthProvider sdk={auth}>
        <StorageProvider sdk={storage}>{children}</StorageProvider>
      </FirebaseAuthProvider>
    </FirestoreProvider>
  );
};

const FirebaseProvider = ({ children }: Props) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKProvider>{children}</FirebaseSDKProvider>
    </FirebaseAppProvider>
  );
};

export { FirebaseProvider };
