import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COMMON_COMPONENTS, SPACING } from '../styles/styles';

const PriceButton = ({ price, onPress }) => {
    return (
        <TouchableOpacity
            style={COMMON_COMPONENTS.productCard.priceButton}
            onPress={onPress}
        >
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
    );
};

export default PriceButton;
