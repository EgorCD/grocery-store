import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import { fetchItems } from '../services/FirestoreApi';
import { COMMON_STYLES } from '../styles/styles';
import ProductCard from './ItemCard';
import LoadingIndicator from '../components/LoadingIndicator';

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
                <ProductCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={COMMON_STYLES.contentContainerStyle}
        />
    );
};

export default ItemList;
