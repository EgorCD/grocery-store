import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { logOut, getUserProfile, updateUserProfile } from '../services/AuthService';
import { app } from '../firebaseConfig';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';

function Profile() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const auth = getAuth(app);
            const currentUser = auth.currentUser;
            if (currentUser) {
                setEmail(currentUser.email);
                try {
                    const profileData = await getUserProfile(currentUser.uid);
                    setName(profileData.name);
                } catch (error) {
                    Alert.alert("Error", "Failed to fetch user profile.");
                }
            }
        };
        fetchUserProfile();
    }, []);

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error("Sign-out Error:", error);
        }
    };

    const editStatus = () => {
        setIsEditing(!isEditing);
    };

    const renderButtons = () => {
        if (isEditing) {
            return (
                <>
                    <TouchableOpacity
                        style={[COMMON_STYLES.primaryButton, { flex: 2, marginRight: SPACING.small }]}
                        onPress={handleSave}
                    >
                        <Text style={COMMON_STYLES.primaryButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[COMMON_STYLES.secondaryButton, { flex: 1 }]}
                        onPress={editStatus}
                    >
                        <Text style={COMMON_STYLES.secondaryButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </>
            );
        } else {
            return (
                <>
                    <TouchableOpacity
                        style={[COMMON_STYLES.secondaryButton, { flex: 2, marginRight: SPACING.small }]}
                        onPress={editStatus}
                    >
                        <Text style={COMMON_STYLES.secondaryButtonText}>Edit Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[COMMON_STYLES.primaryButton, { flex: 1 }]}
                        onPress={handleSignOut}
                    >
                        <Text style={COMMON_STYLES.primaryButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </>
            );
        }
    };

    const handleSave = async () => {
        try {
            await updateUserProfile({ uid: getAuth(app).currentUser.uid, name });
            Alert.alert("Profile Updated", "Your name has been updated successfully.");
            setIsEditing(false);
        } catch (error) {
            Alert.alert("Error", "Failed to update profile.");
            console.error("Error updating profile:", error);
        }
    };

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>
                    Account Details
                </Text>
                <TextInput
                    style={COMMON_STYLES.input}
                    value={name}
                    placeholder="Name"
                    onChangeText={setName}
                    editable={isEditing}
                />
                <TextInput
                    style={COMMON_STYLES.input}
                    value={email}
                    editable={false}
                    placeholder="Email"
                    placeholderTextColor={COLORS.secondaryText}
                />
                <View style={{ flexDirection: 'row', marginTop: SPACING.medium }}>
                    {renderButtons()}
                </View>
            </View>
        </View>
    );
}

export default Profile;