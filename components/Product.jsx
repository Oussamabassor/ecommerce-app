import React from 'react';

function Product({ product, addToCart }) {
    return (
        <div className="product">
        <img src={product.src} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Ajouter au panier</button>
        </div>
    );
}

export default Product;