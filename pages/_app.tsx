import App from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps: { session, ...pageProps },
    } = this.props;
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
}

export default MyApp;
