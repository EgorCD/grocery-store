import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { fetchUserProfile, saveUserProfile, handleSignOut } from '../../services/auth';
import ProfileButtons from '../../components/buttons/ProfileButtons';
import { COMMON_STYLES, COLORS, SPACING } from '../../styles/styles';

function Profile() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const profileData = await fetchUserProfile();
                setEmail(profileData.email);
                setName(profileData.name);
            } catch (error) {
                Alert.alert("Error", error.message);
            }
        };
        loadProfile();
    }, []);

    const handleSave = async () => {
        try {
            await saveUserProfile(name);
            Alert.alert("Profile Updated", "Your name has been updated successfully.");
            setIsEditing(false);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    const editStatus = () => {
        setIsEditing(!isEditing);
    };

    return (
        <ScrollView style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <Text style={COMMON_STYLES.titleText}>Account Details</Text>
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
                <ProfileButtons
                    isEditing={isEditing}
                    handleSave={handleSave}
                    editStatus={editStatus}
                    handleSignOut={handleSignOut}
                />
            </View>
        </ScrollView>
    );
}

export default Profile;
