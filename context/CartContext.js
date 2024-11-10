import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems((prevItems) => {
            let itemExists = false;
            let updatedItems = [];
            for (let i = 0; i < prevItems.length; i++) {
                let currentItem = prevItems[i];
                if (currentItem.id === item.id) {
                    itemExists = true;
                    if (quantity > 0) {
                        updatedItems.push({ ...currentItem, quantity });
                    }
                } else {
                    updatedItems.push(currentItem);
                }
            }
            if (!itemExists && quantity > 0) {
                updatedItems.push({ ...item, quantity });
            }

            return updatedItems;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            let updatedItems = [];
            for (let i = 0; i < prevItems.length; i++) {
                let currentItem = prevItems[i];
                if (currentItem.id !== itemId) {
                    updatedItems.push(currentItem);
                }
            }

            return updatedItems;
        });
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
