import { NextPage } from 'next'
import Head from 'next/head'
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
				<div className={style.content}>
					{/*<ContainerForCells>*/}
					{/*	<div>*/}

					{/*	</div>*/}
					{/*</ContainerForCells>*/}
				</div>
			</Main>
		</>
	)
}

Ideas.displayName = 'Ideas'
export default memo(Ideas)
