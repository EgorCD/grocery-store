import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { fetchItems } from '../../services/firestore';
import { COMMON_STYLES } from '../../styles/styles';
import LoadingIndicator from '../indicators/LoadingIndicator';
import ItemCard from './ItemCard';

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const fetchedItems = await fetchItems(category);
                const trimmedCategory = category.trim().toLowerCase();
                const unit = trimmedCategory === "coffee" ? "ml" : "g";
                const itemsWithUnit = fetchedItems.map((item) => ({
                    ...item,
                    unit: unit,
                }));
                setItems(itemsWithUnit);
            } catch (err) {
                console.error(`Error loading ${category} items:`, err);
                Alert.alert(`Error loading ${category} items: ${err.message}`);
            } finally {
                setLoading(false);
            }
        })();
    }, [category]);

    if (loading) {
        return (
            <View style={COMMON_STYLES.loadingContainer}>
                <LoadingIndicator />
            </View>
        );
    }

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ItemCard item={item} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={COMMON_STYLES.contentContainerStyle}
        />
    );
};

export default ItemList;
