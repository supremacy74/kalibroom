import '@/styles/globals.scss'
import '@/fonts/fonts.scss'
import type { AppProps } from 'next/app'
import Wrapper from '@/main/3ui/Wrapper/Wrapper'
import Header from '@/main/1modules/Header/Header'
import Footer from '@/main/1modules/Footer/Footer'
import store from '@/store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Wrapper>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Wrapper>
		</Provider>
	)
}

export default App
