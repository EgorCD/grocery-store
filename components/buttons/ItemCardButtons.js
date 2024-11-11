import React from 'react';
import QuantitySelector from './QuantitySelector';
import PriceButton from './PriceButton';

const ItemCardButtons = ({ showQuantitySelector, quantity, onIncrease, onDecrease, price, onAddToCart }) => {
    return (
        <>
            {showQuantitySelector ? (
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            ) : (
                <PriceButton price={price} onPress={onAddToCart} />
            )}
        </>
    );
};

export default ItemCardButtons;
