import React from "react";

function Item({ item, onOrderClick }) {
    
    return (
        <div className="item">
            <h4>Book Name: {item.bookName}</h4>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => onOrderClick(item)}>Order</button>
        </div>
    );
}

export default Item;
