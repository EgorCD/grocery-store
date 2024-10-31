import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Map from '../components/Map';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';

function Addresses() {
    const [selectedCategory, setSelectedCategory] = useState('Coffee');

    const outletAddresses = [
        {
            name: 'Coffee Shop',
            category: 'Coffee',
            address: 'Aleksanterinkatu 52, Helsinki',
            latitude: 60.1699,
            longitude: 24.9384
        },
        {
            name: 'Coffee Shop',
            category: 'Coffee',
            address: 'Mannerheimintie 20, Helsinki',
            latitude: 60.1700,
            longitude: 24.9390
        },
        {
            name: 'Grocery Store',
            category: 'Grocery',
            address: 'Kaivokatu 8, Helsinki',
            latitude: 60.1710,
            longitude: 24.9380
        },
        {
            name: 'Grocery Store',
            category: 'Grocery',
            address: 'Fredrikinkatu 47, Helsinki',
            latitude: 60.1720,
            longitude: 24.9370
        },
    ];

    const filteredAddresses = outletAddresses.filter(location => location.category === selectedCategory);

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>
                    Select outlet category
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'left', marginTop: SPACING.small, marginBottom: SPACING.medium }}>
                <TouchableOpacity
                    style={[
                        COMMON_STYLES.primaryButton,
                        { backgroundColor: selectedCategory === 'Coffee' ? COLORS.primary : COLORS.white, marginRight: SPACING.small }
                    ]}
                    onPress={() => setSelectedCategory('Coffee')}
                >
                    <Text style={[
                        COMMON_STYLES.primaryButtonText,
                        { color: selectedCategory === 'Coffee' ? 'white' : 'black' }
                    ]}>
                        Coffee
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        COMMON_STYLES.primaryButton,
                        { backgroundColor: selectedCategory === 'Grocery' ? COLORS.primary : COLORS.white }
                    ]}
                    onPress={() => setSelectedCategory('Grocery')}
                >
                    <Text style={[
                        COMMON_STYLES.primaryButtonText,
                        { color: selectedCategory === 'Grocery' ? 'white' : 'black' }
                    ]}>
                        Grocery
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={COMMON_STYLES.mapContainer}>
                <Map addresses={filteredAddresses} />
            </View>
        </View>
    );
}

export default Addresses;
