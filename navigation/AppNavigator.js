import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

function AppNavigator({ isAuthenticated }) {
    return (
        <NavigationContainer>
            {isAuthenticated ? <BottomTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
}

export default AppNavigator;
