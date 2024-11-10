import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';

export const saveOrder = async (userId, cartItems) => {
    try {
        const orderData = {
            userId: userId,
            items: cartItems,
            totalPrice: calculateTotalPrice(cartItems),
            createdAt: Timestamp.now(),
        };
        const ordersCollectionRef = collection(db, 'orders');
        await addDoc(ordersCollectionRef, orderData);
    } catch (error) {
        console.error('Error saving order:', error);
        throw error;
    }
};

const calculateTotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];
        const itemTotal = currentItem.price * currentItem.quantity;
        total += itemTotal;
    }
    return total;
};

export const fetchUserOrders = async () => {
    try {
        const userId = auth.currentUser.uid;
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        const orders = [];
        querySnapshot.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
        });
        return orders;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
    }
};
