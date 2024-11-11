import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { COMMON_STYLES, COLORS, SPACING } from '../../styles/styles';

const CategorySelector = ({ categoryOptions, selectedCategory, onCategorySelect }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'left', marginTop: SPACING.small, marginBottom: SPACING.medium }}>
            {categoryOptions.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        COMMON_STYLES.primaryButton,
                        { backgroundColor: selectedCategory === category.name ? COLORS.primary : COLORS.white, marginRight: SPACING.small }
                    ]}
                    onPress={() => onCategorySelect(category.name)}
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
    );
};

export default CategorySelector;
