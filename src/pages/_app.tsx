import { FC } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '@/redux/store';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  );
};

export default App;
