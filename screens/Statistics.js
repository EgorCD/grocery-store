import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchUserOrders } from '../services/orders';
import { COMMON_STYLES, SPACING } from '../styles/styles';
import ItemCard from '../components/ItemCard';
import { CartContext } from '../context/CartContext';

function Statistics() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        (async () => {
            try {
                const userOrders = await fetchUserOrders();
                setOrders(userOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <View style={COMMON_STYLES.loadingContainer}>
                <Text>Loading orders...</Text>
            </View>
        );
    }

    if (orders.length === 0) {
        return (
            <View style={COMMON_STYLES.container}>
                <Text style={COMMON_STYLES.titleText}>No orders found</Text>
            </View>
        );
    }

    const handleAddToCart = (item, quantity) => {
        addToCart(item, quantity);
    };

    const handleIncrease = (item, quantity) => {
        addToCart(item, quantity);
    };

    const handleDecrease = (item, quantity) => {
        if (quantity > 0) {
            addToCart(item, quantity);
        } else {
            addToCart(item, 0);
        }
    };

    const renderOrderItem = ({ item: orderItem }) => {
        return (
            <ItemCard
                item={orderItem}
                onAddToCart={handleAddToCart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
            />
        );
    };

    return (
        <View style={COMMON_STYLES.container}>
            <Text style={COMMON_STYLES.titleText}>Your Order History</Text>
            <FlatList
                data={orders}
                keyExtractor={(order) => order.id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: SPACING.medium }}>
                        <Text style={COMMON_STYLES.subtitleText}>
                            Order Date: {item.createdAt.toDate().toLocaleString()}
                        </Text>
                        <Text style={COMMON_STYLES.subtitleText}>
                            Total Price: {item.totalPrice} €
                        </Text>
                        <FlatList
                            data={item.items}
                            keyExtractor={(orderItem) => orderItem.id}
                            renderItem={renderOrderItem}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={COMMON_STYLES.contentContainerStyle}
                        />
                    </View>
                )}
            />
        </View>
    );
}

export default Statistics;
