import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signUp } from '../../services/AuthService';
import { COMMON_STYLES, COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING } from '../../styles/styles';

function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.log("Sign-up Error:", err.message);
        }
    };

    return (
        <View style={COMMON_STYLES.container}>
            <View style={{ marginTop: SPACING.xxlarge }}>
                <Text style={COMMON_STYLES.titleText}>Sign Up</Text>
                <TextInput
                    style={COMMON_STYLES.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.secondaryText}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={COMMON_STYLES.input}
                    placeholder="Password"
                    placeholderTextColor={COLORS.secondaryText}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {error && <Text style={{ color: COLORS.error, marginVertical: SPACING.small }}>{error}</Text>}
                <View style={{ marginTop: SPACING.xxlarge }}>
                    <TouchableOpacity style={COMMON_STYLES.primaryButton} onPress={handleSignUp}>
                        <Text style={COMMON_STYLES.primaryButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: SPACING.medium }}>
                    <Text style={{ fontSize: FONT_SIZES.small, color: COLORS.secondaryText, fontWeight: FONT_WEIGHTS.regular }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ color: COLORS.primary, fontSize: FONT_SIZES.medium, fontWeight: FONT_WEIGHTS.semibold }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignUp;
