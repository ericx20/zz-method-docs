import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { Atkinson_Hyperlegible } from "next/font/google";
import './globals.css'
import "./styles.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
  // GoatCounter analytics integration, taken from https://github.com/arp242/goatcounter/issues/482#issuecomment-1016033292
  const router = useRouter();
  useEffect(
    function sendGoatCounterEventsOnRoute() {
      const handleRouteChange = (path: string) => {
        (window as any)?.goatcounter?.count?.({
          path,
        });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    },
    [router.events]
  );
  const isProd = process.env.NODE_ENV === "production";
  return (
    <div className={atkinsonHyperlegible.className} >
      <Component {...pageProps} />
      {isProd && (
        <Script
          async
          data-goatcounter="/api/count"
          src="/api/count.js"
          strategy="afterInteractive"
        />
      )}
    </div>
  );
}
