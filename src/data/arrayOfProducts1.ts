import {productI} from "@/helpers/interfaces/productI";

const arrayOfProducts: productI[] = []

for (let i = 0; i < 15; i++) arrayOfProducts.push({
  title: 'casper arpa',
  category: 'Кресло дизайнерское',
  price: '1000 ₽',
  images: []
})

export const arrayOfProducts1 = arrayOfProducts
