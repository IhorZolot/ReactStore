import React, { Component } from 'react'
import { fetchProducts } from './service/api'
import { ProductList } from './component/ProductList'

export class App extends Component {
  state = {
    per_page: 12,
    skip: 1,
    products: [],
  }

  async componentDidMount () {
   const {products, total }  = await fetchProducts()
   this.setState({products, total})
  }

  render() {
    const {products} = this.state

    return (
      <div>
      <ProductList products={products} />
      </div>
    )
  }
}

