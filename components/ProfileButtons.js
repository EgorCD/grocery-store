import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { COMMON_STYLES, SPACING } from '../styles/styles';

function ProfileButtons({ isEditing, handleSave, editStatus, handleSignOut }) {
    return (
        <View style={{ flexDirection: 'row', marginTop: SPACING.medium }}>
            {isEditing ? (
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
            ) : (
                <>
                    <TouchableOpacity
                        style={[COMMON_STYLES.primaryButton, { flex: 2, marginRight: SPACING.small }]}
                        onPress={editStatus}
                    >
                        <Text style={COMMON_STYLES.primaryButtonText}>Edit Name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[COMMON_STYLES.secondaryButton, { flex: 1 }]}
                        onPress={handleSignOut}
                    >
                        <Text style={COMMON_STYLES.secondaryButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

export default ProfileButtons;
