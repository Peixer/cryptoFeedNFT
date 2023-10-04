import App from "next/app";
import "../styles/index.css";
import { Wallet } from "../components/Wallet";

class MyApp extends App {
    render() {
        const {
            Component,
            pageProps: { ...pageProps },
        } = this.props;
        return (
            <Wallet>
                <Component {...pageProps} />
            </Wallet>
        );
    }
}

export default MyApp;
