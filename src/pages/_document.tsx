import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => (
  <Html lang="en">
    <Head>
      <meta
        name="description"
        content="Shirt Market - Discover the Latest Trends in T-Shirts"
      />
      <title>Shirt Market</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
