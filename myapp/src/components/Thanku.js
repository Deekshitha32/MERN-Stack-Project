import React from 'react';
import styled from 'styled-components';

// Styled components
const ThankYouPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
    text-align: center;
    padding: 2rem;
`;

const Message = styled.h1`
    color: #28a745;
    font-size: 3rem; /* Larger font size for emphasis */
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const Details = styled.p`
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const ThankYouPage = () => {
    return (
        <ThankYouPageContainer>
            <Message>Thank You for Your Purchase!</Message>
            <Details>Your order has been placed successfully. We hope you enjoy your products!</Details>
            <Button onClick={() => window.location.href = '/'}>Return to Home</Button>
        </ThankYouPageContainer>
    );
};

export default ThankYouPage;
