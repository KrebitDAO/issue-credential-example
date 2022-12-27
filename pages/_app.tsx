import type { AppProps } from "next/app";

import { GeneralProvider } from "../context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeneralProvider>
      <Component {...pageProps} />
    </GeneralProvider>
  );
}
