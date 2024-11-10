import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COMMON_COMPONENTS } from '../styles/styles';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <View style={COMMON_COMPONENTS.productCard.quantitySelector}>
            <TouchableOpacity onPress={onDecrease}>
                <Ionicons
                    name="remove-outline"
                    size={COMMON_COMPONENTS.productCard.iconConfig.size}
                    color={COMMON_COMPONENTS.productCard.iconConfig.color} />
            </TouchableOpacity>
            <Text style={COMMON_COMPONENTS.productCard.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={onIncrease}>
                <Ionicons
                    name="add-outline"
                    size={COMMON_COMPONENTS.productCard.iconConfig.size}
                    color={COMMON_COMPONENTS.productCard.iconConfig.color} />
            </TouchableOpacity>
        </View>
    );
};

export default QuantitySelector;
