import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import { logOut } from '../services/AuthService';
import { app } from '../firebaseConfig';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';

function Profile() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const auth = getAuth(app);
        const user = auth.currentUser;
        if (user) {
            setEmail(user.email);
        }
    }, []);

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error("Sign-out Error:", error);
        }
    };

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>Account Details</Text>
                <TextInput
                    style={[COMMON_STYLES.input, { backgroundColor: COLORS.background }]}
                    value={email}
                    editable={false}
                    placeholder="Email"
                    placeholderTextColor={COLORS.secondaryText}
                />
                <View style={{ marginTop: SPACING.xxlarge }}>
                    <TouchableOpacity style={COMMON_STYLES.primaryButton} onPress={handleSignOut}>
                        <Text style={COMMON_STYLES.primaryButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Profile;