import themeReducer from '@/store/reducers/theme'
import catalogReducer from '@/store/reducers/catalog'
import headerBottomPart from '@/store/reducers/headerBottomPart'
import products from '@/store/reducers/products'

import { combineReducers } from 'redux'
import paths from '@/store/reducers/paths'

const rootReducer = combineReducers({
	theme: themeReducer,
	catalog: catalogReducer,
	headerBottomPart: headerBottomPart,
	products: products,
	paths: paths,
})

export default rootReducer
