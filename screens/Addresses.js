import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Map from '../components/Map';
import { COMMON_STYLES, COLORS, SPACING } from '../styles/styles';

function Addresses() {
    const [address, setAddress] = useState('');
    const [inputAddress, setInputAddress] = useState('');

    const handleSearch = () => {
        setAddress(inputAddress);
    };

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.medium }}>
                <View style={COMMON_STYLES.inputContainer}>
                    <TextInput
                        style={COMMON_STYLES.input}
                        placeholder="Enter address"
                        placeholderTextColor={COLORS.secondaryText}
                        value={inputAddress}
                        onChangeText={setInputAddress}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Map initialAddress={address} />
            </View>
            <View style={{ marginTop: SPACING.medium, marginBottom: SPACING.medium }}>
                <TouchableOpacity style={COMMON_STYLES.primaryButton} onPress={handleSearch}>
                    <Text style={COMMON_STYLES.primaryButtonText}>Search Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Addresses;
