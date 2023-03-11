import '@/styles/globals.scss'
import '@/fonts/fonts.scss'
import type { AppProps } from 'next/app'
import Wrapper from '@/main/3ui/Wrapper/Wrapper'
import Header from '@/main/1modules/Header/Header'
import {useState} from 'react'
import Footer from '@/main/1modules/Footer/Footer'

const App = ({ Component, pageProps }: AppProps) => {
	const [isDarkTheme, handleTheme] =
		useState<boolean>(false)

	return (
		<Wrapper>
			<Header
				isDarkTheme={isDarkTheme}
				handleTheme={handleTheme}
			/>
			<Component {...pageProps} />
			<Footer isDarkTheme={isDarkTheme} />
		</Wrapper>
	)
}

export default App
