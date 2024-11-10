import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COMMON_COMPONENTS } from '../styles/styles';
import { CartContext } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';
import PriceButton from './PriceButton';

const ItemCard = ({ item }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const [showQuantitySelector, setShowQuantitySelector] = useState(false);

    useEffect(() => {
        const cartItem = cartItems.find((i) => i.id === item.id);
        if (cartItem) {
            setQuantity(cartItem.quantity);
            setShowQuantitySelector(cartItem.quantity > 0);
        } else {
            setQuantity(0);
            setShowQuantitySelector(false);
        }
    }, [cartItems]);

    const handleAddToCart = () => {
        setQuantity(1);
        setShowQuantitySelector(true);
        addToCart(item, 1);
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        addToCart(item, newQuantity);
    };

    const decreaseQuantity = () => {
        const newQuantity = quantity - 1;
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            addToCart(item, newQuantity);
        } else {
            setQuantity(0);
            setShowQuantitySelector(false);
            removeFromCart(item.id);
        }
    };

    return (
        <View style={COMMON_COMPONENTS.productCard.cardContainer}>
            <View style={COMMON_COMPONENTS.productCard.infoContainer}>
                <Text style={COMMON_COMPONENTS.productCard.name}>{item.name}</Text>
                <Text style={COMMON_COMPONENTS.productCard.description}>{item.description}</Text>
            </View>
            <View style={COMMON_COMPONENTS.productCard.buttonRow}>
                <TouchableOpacity style={COMMON_COMPONENTS.productCard.quantityButton}>
                    <Text style={COMMON_COMPONENTS.productCard.quantityButtonText}>
                        {item.volume} {item.unit}
                    </Text>
                </TouchableOpacity>
                {showQuantitySelector ? (
                    <QuantitySelector
                        quantity={quantity}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                    />
                ) : (
                    <PriceButton price={item.price} onPress={handleAddToCart} />
                )}
            </View>
        </View>
    );
};

export default ItemCard;
