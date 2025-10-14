import { Product } from '~/models/products.modul'

const getNewProducts = (products: Product[]) => {
    return products.filter(c => c.label.toLocaleLowerCase() === 'new').splice(0, 4)
}

export default defineEventHandler(async (event) => {
    const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
    console.log(products);

    return getNewProducts(products)
})