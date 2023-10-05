import { FC } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/Auth.context';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '@/styles/material.styles';
import '@/styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import { CircularProgress } from '@mui/material';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={<CircularProgress />} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={mainTheme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default App;
