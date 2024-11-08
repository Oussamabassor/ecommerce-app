import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity }) {
    return (
        <div className="cart">
        <h2>Votre panier</h2>
        {cart.length === 0 ? (
            <p>Votre panier est vide.</p>
        ) : (
            <ul>
            {cart.map(item => (
                <li className='cart-item' key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button className='btn1' onClick={() => removeFromCart(item.id)}>Supprimer</button>
                <button className='btn2' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className='btn3' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                </li>
            ))}
            </ul>
        )}
        {cart.length > 0 && (
            <div className="cart-total">
            Total : ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </div>
        )}
        </div>
    );
}

export default Cart;