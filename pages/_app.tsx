import { SessionProvider } from 'next-auth/react';
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import type { NextPage } from 'next';
import { Session } from 'next-auth';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

import { trpc } from '../utils/trpc';

// import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/css/main.css';
import { store } from './admin/stores/store';

import '@/styles/globals.css';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ['latin'] });

function App({
  Component,
  pageProps,
}: AppPropsWithLayout & AppProps<{ session: Session }>) {
  const queryClient = new QueryClient();

  const getLayout = Component.getLayout || ((page) => page);

  const title = `gptui`;

  const description = 'gptui - nextjs gpt ui template';

  const url = 'https://justboil.github.io/admin-one-react-tailwind/';

  const image = `https://static.justboil.me/templates/one/repo-tailwind-react.png`;

  const imageWidth = '1920';

  const imageHeight = '960';

  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Head>
            <meta name="description" content={description} />

            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="JustBoil.me" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content={imageWidth} />
            <meta property="og:image:height" content={imageHeight} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image:src" content={image} />
            <meta property="twitter:image:width" content={imageWidth} />
            <meta property="twitter:image:height" content={imageHeight} />

            <link rel="icon" href="/admin-one-react-tailwind/favicon.png" />
          </Head>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-130795909-1"
            strategy="afterInteractive"
          />

          <SessionProvider session={pageProps.session}>
            <div className={inter.className}>
              <Toaster />
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
              </QueryClientProvider>
            </div>
          </SessionProvider>
        </>,
      )}
    </Provider>
  );
}

export default trpc.withTRPC(appWithTranslation(App));