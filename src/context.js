import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
    
  };

  handleDetail = id => {
    console.log('detail')
  };

  addToCart = id => {
    console.log('cart')
  }
  render() {
    return (
        <ProductContext.Provider value=
            {{  
              ...this.state,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
            }}
        >
            {this.props.children}
        </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }