
//Read_cards.js
import React, { Component } from 'react';
import axios from 'axios';
import url from './url';
import ProductCard from './ProductCard';
import CartButton from './CartButton';
import './style.css'; // Import the CSS file

class Read_cards extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: [],
            status: 'Loading'
        };
    }
    componentDidMount() {
        axios.get(`${url}/product/fetch_all`)
            .then((res) => {
                console.log('Result from did mount:', res);
                this.setState({
                    products: res.data,
                    status: ''
                });
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                this.setState({
                    status: 'Error occurred while fetching products'
                });
            });
    }

    addToCart = (product) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, product]
        }));
    };

    render() {
        const { products, cart, status } = this.state;

        return (
            <div className="container mt-4">
                <div className="text-primary h1 mb-4">Products</div>
                <div className="row">
                    {products.map((product) => (
                        <div key={product._id} className="col-md-4 mb-4">
                            <ProductCard product={product} onAddToCart={this.addToCart} />
                        </div>
                    ))}
                </div>
                {status && <h3 className="text-info mt-3">{status}</h3>}
                <CartButton cart={cart} />
            </div>
        );
    }
}

export default Read_cards;
