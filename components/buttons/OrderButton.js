import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { COMMON_STYLES, SPACING } from '../../styles/styles';

const OrderButton = ({ onPress }) => (
    <View style={{ marginRight: SPACING.small, marginLeft: SPACING.small }}>
        <TouchableOpacity
            style={[COMMON_STYLES.primaryButton, { marginTop: SPACING.medium }]}
            onPress={onPress}
        >
            <Text style={COMMON_STYLES.primaryButtonText}>Order</Text>
        </TouchableOpacity>
    </View>
);

export default OrderButton;
