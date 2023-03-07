import '@/styles/globals.scss'
import '@/fonts/fonts.scss'
import type { AppProps } from 'next/app'
import Wrapper from '@/main/3ui/Wrapper/Wrapper'

export default function App({
	Component,
	pageProps,
}: AppProps) {
	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	)
}
