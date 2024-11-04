import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { fetchUserProfile } from '../services/AuthService';
import { COMMON_STYLES, SPACING } from '../styles/styles';

const UserGreeting = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const profileData = await fetchUserProfile();
                setName(profileData.name);
            } catch (error) {
                Alert.alert("Error", "Failed to load user information.");
            }
        })();
    }, []);

    return (
        <View style={COMMON_STYLES.headerContainer}>
            <Text style={[COMMON_STYLES.titleText, { marginTop: SPACING.medium }]}>
                Hello, {name}!
            </Text>
            <Text style={COMMON_STYLES.subtitleText}>
                What would you like to order today?
            </Text>
        </View>
    );
};

export default UserGreeting;
