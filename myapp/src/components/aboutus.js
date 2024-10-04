//aboutus.js
import React from 'react';
import './AboutUs.css'; // Import your CSS for styling
export default class AboutUs extends React.Component {
    render() {
        return (
            <div className='about-us-container'>
                <div className='about-us-header'>
                    <h1>About Us</h1>
                    <p>Discover unique finds and delightful deals, crafted to elevate your everyday life.</p>
                </div>
                <div className='about-us-content'>
                    <div className='about-us-text'>
                        <p>At BestBuy, we're dedicated to making shopping enjoyable and seamless. We offer a wide range of high-quality products at competitive prices, ensuring you find exactly what you need—from fashion and home essentials to electronics and unique gifts, all under one roof.</p>
                        <p>Founded in 2024, BestBuy started small in e-commerce and has since grown, driven by our commitment to quality and customer satisfaction. Our team is passionate about providing exceptional service, from your first click to the delivery of your order. We continually innovate to enhance your shopping experience.</p>
                        <p>Thank you for choosing BestBuy. We're here to assist you and look forward to making your shopping journey delightful.</p>
                        <p>Happy shopping!</p>
                        <p>Sincerely,</p>
                        <p>The BestBuy Team</p>
                    </div>
                    <div className='about-us-image'>
                        <img src='https://i.pinimg.com/564x/18/dd/40/18dd40e2216daac5cf4cd24dadd00b62.jpg' alt='BestBuy Image' />
                    </div>
                </div>
            </div>
        );
    }
}

