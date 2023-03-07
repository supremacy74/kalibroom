import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import { memo } from 'react'
import Header from "@/main/1modules/Header/Header";

const Home: NextPage = () => {
	// const changeTheme = () => {
	// 	if (document.body.classList.value === 'dark-theme') {
	// 		console.log('dark to white')
	// 		document.body.classList.remove('dark-theme')
	// 		localStorage.setItem('theme', 'light-theme')
	// 	} else {
	// 		console.log('white to dark')
	// 		document.body.classList.add('dark-theme')
	// 		localStorage.setItem('theme', 'dark-theme')
	// 	}
	// }
	//
	// const getTheme = () => {
	// 	const theme = localStorage.getItem('theme')
	// 	if (theme === 'dark-theme') {
	// 		document.body.classList.add('dark-theme')
	// 	} else if (theme === 'light-theme') {
	// 		document.body.classList.remove('dark-theme')
	// 	}
	// }
	//
	// useEffect(() => {
	// 	getTheme()
	// }, [])

	return (
		<>
			<Head>
				<title>Kalibroom</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={style.main}></main>
		</>
	)
}

export default memo(Home)
