import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './DisplayCart.css'

export default function DisplayCart({ cart }) {
    return (
        <div className="shopping-cart">
            <h2 className='dchead'>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((cartItem, index) => (
                        <h5 key={index}>
                            {cartItem.bookName} - ₹{cartItem.price}
                        </h5>
                    ))}
                </ul>
            )}
        </div>
    );
}
