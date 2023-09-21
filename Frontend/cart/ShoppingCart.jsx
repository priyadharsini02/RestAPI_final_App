import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import DisplayCart from "./DisplayCart";
import './ShoppingCart.css'
import { Link } from "react-router-dom";

export default function ShoppingCart() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch items from the server
        axios.get("http://localhost:8081/books")
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching items:", error);
            });
    }, []);

    const handleOrderClick = (item) => {
        // Add the selected item to the cart
        setCart([...cart, item]);
    };

    return (
        <div className="cart">
        <center>
            <h1 className="schead">E-BOOKOPOLIS</h1></center>
            <div className="container">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'><ItemList items={items} onOrderClick={handleOrderClick} /></div>
            <div className="display"><div className='col-md-8 offset-md-3 border rounded p-4 mt-5 shadow'><DisplayCart cart={cart} /></div>
            </div>
            </div>
            <Link className='btn btn-light btn-bottom mx-2 my-4' to={"/customer_home"}>
    Back to Home
    </Link>
        </div>
    );
}
