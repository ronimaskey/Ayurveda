import React, { Component } from 'react';
import Product from './Product';
import Title from './Tile'
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
  state = { products:[] }

  render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map( (product, key) => {
                                        return <Product key={key} product={product} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}