import React from "react";
import Item from "./Item";
import './DisplayCart.css'

function ItemList({ items, onOrderClick }) {
    return (
        <div className="item-list">
            <h2 className='dchead'>Available Items</h2>
            <div>
            {items.map((item) => (
                <Item key={item.id} item={item} onOrderClick={onOrderClick} />
            ))}
            </div>
        </div>
    );
}

export default ItemList;
