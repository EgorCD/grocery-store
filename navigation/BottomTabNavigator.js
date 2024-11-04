import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Catalog from '../screens/Catalog';
import Addresses from '../screens/Addresses';
import Statistics from '../screens/Statistics';
import Profile from '../screens/Profile';
import BackButton from '../components/BackButton';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === 'Catalog') iconName = focused ? 'list' : 'list-outline';
                    else if (route.name === 'Addresses') iconName = focused ? 'location' : 'location-outline';
                    else if (route.name === 'Statistics') iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerLeft: () => route.name !== 'Home' ? <BackButton navigation={navigation} /> : null, 
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Catalog" component={Catalog} />
            <Tab.Screen name="Addresses" component={Addresses} />
            <Tab.Screen name="Statistics" component={Statistics} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
