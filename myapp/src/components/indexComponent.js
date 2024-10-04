//indexComponent.js
import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import SignupComponent from "./SignupComponent";
import MainComponent from "./MainComponent";
import Read_cards from "./Read_cards";
import Header from './Header';
import CartButton from './CartButton'; // Import the CartButton component
import CartPage from './CartPage';     // Import the CartPage component
import ThankYouPage from './Thanku';   // Import the ThankYouPage component

export default class IndexComponent extends React.Component {
    render() {
        // Example cart data (this should ideally come from a state management solution or a parent component)
        const cart = [
            { p_name: 'Item 1', p_qty: 2, p_cost: 10 },
            { p_name: 'Item 2', p_qty: 1, p_cost: 20 }
        ];

        return (
            <Router>
    <Header />
    <div className="container mt-5">
        <Routes>
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/login" element={<MainComponent />} />
            <Route path="/read-cards" element={<Read_cards />} />
            <Route path="/" element={<CartButton cart={cart} />} /> {/* Default route showing CartButton */}
            <Route path="/cart" element={<CartPage />} /> {/* Route for the CartPage */}
            <Route path="/thanku" element={<ThankYouPage />} /> {/* Route for the ThankYouPage */}
        </Routes>
    </div>
</Router>

        );
    }
}
