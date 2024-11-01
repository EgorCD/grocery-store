import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Map from '../components/Map';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';
import outletAddresses from '../data/outletAddresses';
import categoryOptions from '../data/categoryOptions';

function Addresses() {
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0].name);
    const filteredAddresses = outletAddresses.filter(location => location.category === selectedCategory);

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>
                    Select outlet category
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'left', marginTop: SPACING.small, marginBottom: SPACING.medium }}>
                {categoryOptions.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={[
                            COMMON_STYLES.primaryButton,
                            { backgroundColor: selectedCategory === category.name ? COLORS.primary : COLORS.white, marginRight: SPACING.small }
                        ]}
                        onPress={() => setSelectedCategory(category.name)}
                    >
                        <Text style={[
                            COMMON_STYLES.primaryButtonText,
                            { color: selectedCategory === category.name ? 'white' : 'black' }
                        ]}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={COMMON_STYLES.mapContainer}>
                <Map addresses={filteredAddresses} />
            </View>
        </View>
    );
}

export default Addresses;
