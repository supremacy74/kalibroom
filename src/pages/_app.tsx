import '@/styles/globals.scss'
import '@/fonts/fonts.scss'
import type { AppProps } from 'next/app'
import Wrapper from '@/main/3ui/Wrapper/Wrapper'
import Header from '@/main/1modules/Header/Header'
import Footer from '@/main/1modules/Footer/Footer'
import store from '@/store'
import { Provider } from 'react-redux'
import {useAppDispatch} from "@/store/hooks";
import {useEffect} from "react";
import WrapperInner from "@/main/3ui/WrapperInner/WrapperInner";
import Hero from "@/main/1modules/Hero/Hero";
import {useRouter} from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
	const router = useRouter()

	const arrayOfHeroVisibleURLs = [
		'/',
		'/products',
		'/ideas'
	]

	return (
		<Provider store={store}>
			<Wrapper>
				<Header />
				{arrayOfHeroVisibleURLs.includes(router.pathname) && (
					<WrapperInner>
						<Hero />
					</WrapperInner>
				)}
				<Component {...pageProps} />
				<Footer />
			</Wrapper>
		</Provider>
	)
}

export default App
