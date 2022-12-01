import "../styles/index.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} basePath="/custom-route/api/auth">
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
