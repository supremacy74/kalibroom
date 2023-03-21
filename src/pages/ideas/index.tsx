import { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/main/1modules/Hero/Hero'
import { memo } from 'react'
import style from '@/styles/Ideas.module.scss'
import Main from '@/main/3ui/Main/Main'

const Ideas: NextPage = () => {
	return (
		<>
			<Head>
				<title>Kalibroom — Идеи</title>
			</Head>
			<Main>
				<Hero />
			</Main>
		</>
	)
}

Ideas.displayName = 'Ideas'
export default memo(Ideas)
