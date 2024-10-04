//ProductCard.js
import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const ProductCard = ({ product, onAddToCart }) => {
    const addToCart = async () => {
        const userName = Cookies.get('userName'); // Retrieve the logged-in user's name from cookies
        if (!userName) {
            alert('You need to log in to add items to the cart.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/cart/insert', {
                u_name: userName, // Use the logged-in user's name
                p_id: product.p_id,
                p_img: product.p_img,
                p_cost: product.p_cost
            });
            if (response.data.insert === 'success'){
                onAddToCart(product);
                alert('Product added to cart');
            } else {
                alert('This product is already in cart. ');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('This product is already in cart.');
        }
    };

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            });
            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = 'none';
            });
        });
    }, []);

    return (
        <div style={styles.card} className="card mb-4">
            <img src={product.p_img} className="card-img-top" alt={product.p_name} style={styles.image} />
            <div className="card-body" style={styles.cardBody}>
                <h5 className="card-title">{product.p_name}</h5>
                <p className="card-text" style={styles.text}><strong>Cost: </strong>{product.p_cost}</p>
                <p className="card-text" style={styles.text}><strong>Category: </strong>{product.p_cat}</p>
                <p className="card-text" style={styles.text}><strong>Description: </strong>{product.p_desc}</p>
                <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer'
    },
    image: {
        height: '400px',
        objectFit: 'cover'
    },
    cardBody: {
        padding: '15px'
    },
    text: {
        margin: '0'
    }
};

export default ProductCard;
