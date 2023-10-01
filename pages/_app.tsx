import type { AppProps } from 'next/app'
import App from 'next/app'
import '../styles/index.css'
import withIdentity from '../lib/withIdentity'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default withIdentity(MyApp)