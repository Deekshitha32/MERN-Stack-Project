//CartPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

// Styled components
const CartPageContainer = styled.div`
    padding: 2rem;
    background-color: #f8f9fa;
    max-width: 800px;
    margin: auto;
`;

const Title = styled.h2`
    margin-bottom: 1rem;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`;

const Total = styled.h3`
    margin: 0;
`;

const ProceedButton = styled.button`
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;

    &:hover {
        background-color: #218838;
    }
`;

const ItemList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    background-color: #fff;
`;

const ItemDetails = styled.div`
    flex: 1;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 1rem;
`;

const QuantityControls = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;

    &:hover {
        background-color: #0056b3;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // Fetch cart items from the backend on component mount
    useEffect(() => {
        const fetchCartItems = async () => {
            const userName = Cookies.get('userName'); // Retrieve the logged-in user's name from cookies
            if (!userName) {
                alert('You need to log in to view your cart.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/cart/fetch?u_name=${userName}`);
                setCart(response.data.cart);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const updateQuantity = async (index, delta) => {
        const userName = Cookies.get('userName'); // Retrieve the logged-in user's name from cookies
        if (!userName) {
            alert('You need to log in to update your cart.');
            return;
        }

        const newCart = [...cart];
        newCart[index].p_qty += delta;

        setCart(newCart);
        // Update the cart item quantity in the backend
        try {
            await axios.put('http://localhost:8080/cart/update', {
                u_name: userName,
                p_id: newCart[index].p_id,
                p_qty: newCart[index].p_qty
            });
        } catch (error) {
            console.error('Error updating cart item quantity:', error);
        }
    };

    const deleteQuantity = async (index) => {
        const userName = Cookies.get('userName'); // Retrieve the logged-in user's name from cookies
        if (!userName) {
            alert('You need to log in to update your cart.');
            return;
        }

        const newCart = [...cart];
        newCart[index].p_qty -= 1;

        // If quantity is 0, remove item from cart
        if (newCart[index].p_qty < 1) {
            newCart.splice(index, 0);
        }

        setCart(newCart);

        // Delete the cart item quantity in the backend
        try {
            await axios.delete('http://localhost:8080/cart/delete', {
                data: {
                    u_name: userName,
                    p_id: newCart[index].p_id
                }
            });
        } catch (error) {
            console.error('Error deleting cart item quantity:', error);
        }
    };

    const totalPrice = cart.reduce((acc, item) => acc + (item.p_qty * item.p_cost), 0);

    const handleProceed = () => {
        navigate('/thanku');
    };

    return (
        <CartPageContainer>
            <Title>Cart</Title>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ItemList>
                        {cart.map((item, index) => (
                            <Item key={index}>
                                <ProductImage src={item.p_img} alt={item.p_name || 'Product Image'} />
                                <ItemDetails>
                                    <p>{item.p_name}</p>
                                    <p>{item.p_cost} x {item.p_qty}</p>
                                </ItemDetails>
                                <QuantityControls>
                                    <Button onClick={() => deleteQuantity(index)}>-</Button>
                                    <span>{item.p_qty}</span>
                                    <Button onClick={() => updateQuantity(index, 1)}>+</Button>
                                </QuantityControls>
                            </Item>
                        ))}
                    </ItemList>
                    <TotalContainer>
                        <Total>Total: {totalPrice.toFixed(2)}</Total>
                        <ProceedButton onClick={handleProceed}>Proceed to Buy</ProceedButton>
                    </TotalContainer>
                </>
            )}
        </CartPageContainer>
    );
};

export default CartPage;
