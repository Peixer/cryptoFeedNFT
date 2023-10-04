import App from "next/app";
import "../styles/index.css";

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps: { ...pageProps },
    } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default MyApp;
