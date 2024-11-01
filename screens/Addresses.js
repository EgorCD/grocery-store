import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Map from '../components/Map';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';
import outletAddresses from '../data/outletAddresses';

function Addresses() {
    const [selectedCategory, setSelectedCategory] = useState('Coffee');
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
