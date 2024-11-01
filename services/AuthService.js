import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);

export const initializeAuthListener = (setAuthenticated) => {
    const removeAuthListener = onAuthStateChanged(auth, (user) => setAuthenticated(!!user));
    return removeAuthListener;
};

export const signUp = async (email, password, additionalData) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            createdAt: new Date(),
            ...additionalData,
        });
        console.log("User added to Firestore");
        return user;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const logOut = async () => {
    try {
        return await signOut(auth);
    } catch (error) {
        throw error;
    }
};

export const handleSignOut = async () => {
    try {
        await logOut();
    } catch (error) {
        throw new Error("Sign-out Error");
    }
};

export const fetchUserProfile = async () => {
    try {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const profileData = await getUserProfile(currentUser.uid);
            return {
                email: currentUser.email,
                ...profileData
            };
        } else {
            throw new Error("No current user logged in");
        }
    } catch (error) {
        throw new Error("Failed to fetch user profile");
    }
};

export const getUserProfile = async (uid) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            throw new Error("User profile not found");
        }
    } catch (error) {
        throw error;
    }
};

export const saveUserProfile = async (name) => {
    try {
        const uid = auth.currentUser.uid;
        await updateUserProfile({ uid, name });
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw new Error("Failed to update profile");
    }
};

export const updateUserProfile = async ({ uid, name }) => {
    try {
        const userDocRef = doc(db, "users", uid);
        await updateDoc(userDocRef, { name });
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw new Error("Failed to update user profile");
    }
};