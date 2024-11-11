import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS, COMMON_STYLES } from '../../styles/styles';

function LoadingIndicator({ color = COLORS.primary, size = 'large' }) {
    return (
        <View style={COMMON_STYLES.loadingContainer}>
            <ActivityIndicator color={color} size={size} />
        </View>
    );
}

export default LoadingIndicator;
