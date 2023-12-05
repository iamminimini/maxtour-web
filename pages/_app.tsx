import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/src/locales/i18n';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ConfigProvider>
            <Component {...pageProps} />
          </ConfigProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
