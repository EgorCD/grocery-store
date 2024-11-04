import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

// https://firebase.google.com/docs/firestore/query-data/get-data

export const fetchItems = async (category) => {
    try {
        const querySnapshot = await getDocs(collection(db, 'products', category, 'items'));
        const items = [];
        querySnapshot.forEach(doc => {
            items.push({ id: doc.id, ...doc.data() });
        });
        return items;
    } catch (error) {
        console.error(`Error fetching ${category} items:`, error);
        throw error;
    }
};
