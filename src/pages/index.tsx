import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import { memo, useState } from 'react'
import Header from '@/main/1modules/Header/Header'

const Home: NextPage = () => {
	const [isDarkTheme, handleTheme] =
		useState<boolean>(false)

	return (
		<>
			<Head>
				<title>Kalibroom</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header
				isDarkTheme={isDarkTheme}
				handleTheme={handleTheme}
			/>
			<main className={style.main}></main>
		</>
	)
}

export default memo(Home)
