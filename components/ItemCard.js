import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COMMON_COMPONENTS, SPACING } from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemCard = ({ name, description, price, quantity, unit }) => {
    return (
        <View style={COMMON_COMPONENTS.productCard.cardContainer}>
            <View style={COMMON_COMPONENTS.productCard.infoContainer}>
                <Text style={COMMON_COMPONENTS.productCard.name}>{name}</Text>
                <Text style={COMMON_COMPONENTS.productCard.description}>{description}</Text>
            </View>
            <View style={COMMON_COMPONENTS.productCard.buttonRow}>
                <TouchableOpacity style={COMMON_COMPONENTS.productCard.quantityButton}>
                    <Text style={COMMON_COMPONENTS.productCard.quantityButtonText}>
                        {quantity} {unit}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={COMMON_COMPONENTS.productCard.priceButton}>
                    <View style={COMMON_COMPONENTS.productCard.rowWithIcon}>
                        <Text style={COMMON_COMPONENTS.productCard.priceButtonText}>{price} €</Text>
                        <Ionicons
                            name={COMMON_COMPONENTS.productCard.iconConfig.name}
                            size={COMMON_COMPONENTS.productCard.iconConfig.size}
                            color={COMMON_COMPONENTS.productCard.iconConfig.color}
                            style={{ marginLeft: SPACING.small }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemCard;
