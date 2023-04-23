import themeReducer from '@/store/reducers/theme'
import catalogReducer from '@/store/reducers/catalog'
import headerBottomPart from '@/store/reducers/headerBottomPart'
import products from '@/store/reducers/products'
import paths from '@/store/reducers/paths'
import search from '@/store/reducers/search'
import popups from '@/store/reducers/popups'
import bodyOverflow from '@/store/reducers/bodyOverflow'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	theme: themeReducer,
	catalog: catalogReducer,
	headerBottomPart: headerBottomPart,
	products: products,
	paths: paths,
	search: search,
	popups: popups,
	bodyOverflow: bodyOverflow,
})

export default rootReducer
