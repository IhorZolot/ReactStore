import React, { Component } from "react";
import { fetchProducts } from "./service/api";
import { ProductList } from "./component/ProductList";
import { LoadMoreButton } from "./component/LoadMoreButton";
import { Cart } from "./component/Cart";

export class App extends Component {
  state = {
    limit: 3,
    skip: 0,
    products: [],
    cart: [],
  };

  async componentDidMount() {
    const { limit } = this.state;
    const { products, total } = await fetchProducts({ limit });
    this.setState({ products, total });
  }
  loadNextItems = () => {
    this.setState((prev) => ({ skip: prev.skip + prev.limit }));
  };

  async componentDidUpdate(_, prevState) {
    const { skip, limit } = this.state;
    if (skip !== prevState.skip) {
      const { products, total } = await fetchProducts({ limit, skip });
      // this.setState({ products, total });
      this.setState((prevState) => ({
        products: [...prevState.products, ...products],
      }));
    }
  }
  addToCart = (item) => {
    this.setState((prev) => ({ cart: [...prev.cart, item] }));
  };

  render() {
    const { products, cart } = this.state;

    return (
      <div>
        <LoadMoreButton onNextPage={this.loadNextItems}>
          Load more{" "}
        </LoadMoreButton>
        <Cart cart={cart} />
        <ProductList addToCart={this.addToCart} products={products} />
      </div>
    );
  }
}
