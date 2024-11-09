import { collection, getDocs, doc, runTransaction } from "firebase/firestore";
import { db } from "../firebaseConfig";

// https://firebase.google.com/docs/firestore/query-data/get-data

export const fetchItems = async (category) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'products', category, 'items'));
        const items = [];
        querySnapshot.forEach(doc => {
            items.push({ id: doc.id, category: category, ...doc.data() });
        });
        return items;
    } catch (error) {
        console.error(`Error fetching ${category} items:`, error);
        throw error;
    }
};

// https://firebase.google.com/docs/firestore/manage-data/transactions

export const updateStock = async (selectedItems) => {
    try {
        await runTransaction(db, async (transaction) => {
            const itemDataArray = [];

            // Perform all reads
            for (const item of selectedItems) {
                const itemRef = doc(db, 'products', item.category, 'items', item.id);
                const itemDoc = await transaction.get(itemRef);

                if (!itemDoc.exists()) {
                    throw new Error(`Item "${item.name}" does not exist.`);
                }

                const currentStock = itemDoc.data().stock;

                itemDataArray.push({
                    item,
                    itemRef,
                    currentStock,
                });
            }

            // Check for sufficient stock
            for (const { item, currentStock } of itemDataArray) {
                if (currentStock < item.quantity) {
                    throw new Error(`Insufficient stock for "${item.name}".`);
                }
            }

            // Perform all writes
            for (const { item, itemRef, currentStock } of itemDataArray) {
                transaction.update(itemRef, {
                    stock: currentStock - item.quantity,
                });
            }
        });
    } catch (error) {
        console.error('Error updating stock:', error);
        throw error;
    }
};