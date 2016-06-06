import falcorRouter from 'falcor-router'
import { getProducts, setProducts } from './controller'

export default class Router extends falcorRouter.createClass([
  {
    route: 'menu',
    get: async function (pathSet) {
      const products = await getProducts().then(products => products)
      return {path: ['menu'], value: products }
    },
    set() {
      const products = JSON.parse(this.menu).jsonGraph.menu.value.products
      setProducts(JSON.stringify(products, null, '\t'))
      return { path: ['menu'], value: JSON.stringify({products})}
    }
  }
]){
  constructor(products){
    super()
    this.menu = products
  }
}
