import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'contexts/AuthContext';
import { FirebaseProvider } from 'contexts/FirebaseContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default MyApp;
