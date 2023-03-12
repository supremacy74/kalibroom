import themeReducer from '@/store/reducers/theme'
import catalogReducer from "@/store/reducers/catalog";
import headerBottomPart from "@/store/reducers/headerBottomPart";
import products from "@/store/reducers/products";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	theme: themeReducer,
	catalog: catalogReducer,
	headerBottomPart: headerBottomPart,
	products: products
})

export default rootReducer
