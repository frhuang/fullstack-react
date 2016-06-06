import React from 'react';
import Falcor from 'falcor';
import model from './model'

export default class NamesList extends React.Component {
    constructor() {
        super()
        this.state = {products: []}
    }

    componentWillMount() {
        this.update()
    }

    render() {
      console.log(this.state.products);
      var products = this.state.products;
      var index = 0;
        var names = products.map(product => {
            index ++;
            return <li key={index}>{product.name}</li>
        })
        console.log(this.state.products);
        return (
          <div>
            <h1>新加2233</h1>
            <ul>{names}</ul>
          </div>

        )
    }

    update() {
        model.get('menu')
        .then(response => {
          const products = JSON.parse(response.json.menu)
          this.setState({
            products:products
          })
        })
    }
}
