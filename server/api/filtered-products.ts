import { Product } from "~/models/products.modul";
export interface Query {
    field: keyof Product;
    name: string;
}

const getFilteredroducts = (products: Product[], query: Query) => {
    if (query.field && query.name) {
        return products.filter(c => c[query.field] === query.name)
    } else {
        return products
    }
}



export default defineEventHandler(async (event) => {
    const { field, name }: Query = getQuery(event)
    const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
    console.log(products);

    return getFilteredroducts(products, { field, name })

})    