import React from 'react';
import Product from './Product';

function ProductList({ products, addToCart, filter }) {
    return (
        <div className="product-list">
        {products.filter(product => filter ? product.category === filter : true).map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
        </div>
    );
}

export default ProductList;