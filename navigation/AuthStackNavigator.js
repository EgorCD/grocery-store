import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/Auth/SignIn';
import SignUpScreen from '../screens/Auth/SignUp';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="SignUp">
            <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    );
}

export default AuthStackNavigator;