import React from 'react';
import { View, Text } from 'react-native';
import { COMMON_STYLES, SPACING } from '../styles/styles';
import ItemList from './ItemList';

const CategorySection = ({ categoryName }) => {
    return (
        <View style={COMMON_STYLES.categorySectionContainer}>
            <Text style={COMMON_STYLES.categoryTitleText}>{categoryName}</Text>
            <ItemList category={categoryName.toLowerCase()} />
        </View>
    );
};

export default CategorySection;
