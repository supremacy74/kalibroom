import { FC, memo } from 'react'
import WrapperInner from '@/main/3ui/WrapperInner/WrapperInner'
import style from './Content.module.scss'
import Description from '@/main/1modules/ProductPage/Description/Description'
import MainLeftPart from '@/main/1modules/ProductPage/MainLeftPart/MainLeftPart'
import MainRightPart from '@/main/1modules/ProductPage/MainRightPart/MainRightPart'
import Reviews from '@/main/1modules/ProductPage/Reviews/Reviews'
import RelatedProducts from '@/main/1modules/ProductPage/RelatedProducts/RelatedProducts'
import OurFurniture from '@/main/1modules/ProductPage/OurFurniture/OurFurniture'
import MayLike from '@/main/1modules/ProductPage/MayLike/MayLike'
import { arrayOfProducts } from '@/data/arrayOfProducts'

const Content: FC = () => {
	const product = arrayOfProducts[0]

	return (
		<WrapperInner className={style.content}>
			<main className={style.main}>
				<MainLeftPart />
				<MainRightPart product={product} />
				<Description>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						architecto consectetur dicta dolores ducimus incidunt ipsa nulla,
						numquam odio omnis perferendis possimus qui recusandae repellendus
						rerum veniam vero voluptatem voluptatibus.
					</p>
					<p>
						Atque dignissimos nobis reprehenderit veritatis! Alias cupiditate,
						enim eum hic illo mollitia, nostrum omnis praesentium quo quod
						reprehenderit repudiandae sint ullam? Accusamus eius error officiis
						ratione repellendus reprehenderit. Ad, dignissimos?
					</p>
					<p>
						Aliquid cum eius praesentium repellendus. Aspernatur deleniti est
						excepturi fugiat inventore labore laboriosam, maiores minus omnis
						perferendis possimus repellendus. Dolorem ducimus fuga itaque nisi
						provident recusandae tempora tenetur veniam veritatis!
					</p>
				</Description>
			</main>
			<Reviews />
			<RelatedProducts />
			<OurFurniture />
			<MayLike />
		</WrapperInner>
	)
}

export default memo(Content)
