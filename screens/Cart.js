import React, { useContext } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';
import { COMMON_STYLES } from '../styles/styles';
import ItemCard from '../components/ItemCard';
import OrderButton from '../components/OrderButton';
import { updateStock } from '../services/firestore';
import { saveOrder } from '../services/orders';
import { auth } from '../firebaseConfig';

function Cart() {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleOrder = async () => {
    try {
      await updateStock(cartItems);
      const userId = auth.currentUser.uid;
      await saveOrder(userId, cartItems);
      Alert.alert('Order Successful', 'Your order has been placed.');
      clearCart();
    } catch (error) {
      Alert.alert('Order Failed', error.message);
    }
  };

  if (cartItems.length === 0) {
    return (
      <View style={COMMON_STYLES.container}>
        <Text style={COMMON_STYLES.titleText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={COMMON_STYLES.outerContainer}>
      <View style={COMMON_STYLES.categorySectionContainer}>
        <Text style={COMMON_STYLES.categoryTitleText}>Added Items</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemCard item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={COMMON_STYLES.contentContainerStyle}
        />
      </View>
      <OrderButton onPress={handleOrder} />
    </View>
  );
}

export default Cart;
