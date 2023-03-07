import '@/styles/globals.scss'
import '@/fonts/fonts.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
