import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Map from '../components/Map';
import { COMMON_STYLES, SPACING } from '../styles/styles';
import outletAddresses from '../data/outletAddresses';
import categoryOptions from '../data/categoryOptions';
import CategorySelector from '../components/CategorySelector';

function Addresses() {
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0].name);
    const filteredAddresses = outletAddresses.filter(location => location.category === selectedCategory);

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>Select outlet category</Text>
            </View>
            <CategorySelector
                categoryOptions={categoryOptions}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />
            <View style={COMMON_STYLES.mapContainer}>
                <Map addresses={filteredAddresses} />
            </View>
        </View>
    );
}

export default Addresses;

