import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import './styles/App.css';
import capuche from './Capuche.jpg';
// import productsData from './data/products.json'; // Fichier JSON contenant les données des produits

function App() {
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState(null);

    const products = [
        { id: 1, name: "Product 1", price: 10,src: capuche },
        { id: 2, name: "Product 2", price: 20,src: capuche },
        { id: 3, name: "Product 3", price: 30,src: capuche },
        { id: 4, name: "Product 4", price: 40,src: capuche },
        { id: 5, name: "Product 5", price: 50,src: capuche },
        { id: 6, name: "Product 6", price: 60,src: capuche },
        { id: 7, name: "Product 7", price: 70,src: capuche },
        { id: 8, name: "Product 8", price: 80,src: capuche },
        // ... more products
    ];

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
    
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    

    const updateQuantity = (id, newQuantity) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<ProductList products={products} addToCart={addToCart} filter={filter} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
                />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </>
    );
}

export default App;
