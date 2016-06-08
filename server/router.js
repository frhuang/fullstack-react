import falcorRouter from 'falcor-router'
import { getProducts, setProducts } from './controller'

export default class Router extends falcorRouter.createClass([
  {
    route: 'product',
    get: async function (pathSet) {
      const products = await getProducts().then(products => products)
      return {path: ['product'], value: products }
    },
    set() {
      const products = JSON.parse(this.product).jsonGraph.product.value.products
      setProducts(JSON.stringify(products, null, '\t'))
      return { path: ['product'], value: JSON.stringify({products})}
    }
  }
]){
  constructor(products){
    super()
    this.product = products
  }
}
