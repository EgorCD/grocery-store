import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { fetchItems } from '../services/firestore';
import { COMMON_STYLES } from '../styles/styles';
import LoadingIndicator from '../components/LoadingIndicator';
import ItemCard from './ItemCard';

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const fetchedItems = await fetchItems(category);
                setItems(fetchedItems);
            } catch (err) {
                console.error(`Error loading ${category} items:`, err);
                Alert.alert(`Error loading ${category} items: ${err.message}`);
            } finally {
                setLoading(false);
            }
        })();
    }, [category]);

    const updatedCategory = category.trim().toLowerCase();
    const unit = updatedCategory === "coffee" ? "ml" : "g";

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
                <ItemCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    unit={unit}
                />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={COMMON_STYLES.contentContainerStyle}
        />
    );
};

export default ItemList;
