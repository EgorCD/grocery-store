import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                if (quantity > 0) {
                    return prevItems.map((i) =>
                        i.id === item.id ? { ...i, quantity } : i
                    );
                } else {
                    return prevItems.filter((i) => i.id !== item.id);
                }
            } else {
                if (quantity > 0) {
                    return [...prevItems, { ...item, quantity }];
                } else {
                    return prevItems;
                }
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
