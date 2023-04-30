import { NextPage } from 'next'

const Cart: NextPage = () => {
	// const dispatch = useDispatch()
	// const cart = useAppSelector(state => state.cart)
	//
	// useEffect(() => {
	// 	const userCart = localStorage.getItem('cart')
	// 	if (userCart) {
	// 		const productsIds: number[] = JSON.parse(userCart).products
	// 		const productsData: any = []
	// 		console.log(productsIds)
	// 		productsIds.forEach(productId => {
	// 			fetch(`https://api.kalibroom.ru/api/products/${productId}`)
	// 				.then(response => {
	// 					productsData.push(response.json())
	// 					if (productsData.length === productsIds.length) {
	// 						dispatch(setCartProducts(productsData))
	// 					}
	// 				})
	// 				.catch(error => {
	// 					console.log(error)
	// 				})
	// 		})
	// 	}
	// }, [])

	return (
		<>
			{/*{cart.products.length > 0 ? (*/}
			{/*	<FilledCart products={cart.products} />*/}
			{/*) : (*/}
			{/*	<EmptyCart />*/}
			{/*)}*/}
		</>
	)
}

export default Cart
