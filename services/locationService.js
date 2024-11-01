import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to show the map');
    }
    return status === 'granted';
};

export const getCurrentLocation = async () => {
    try {
        const location = await Location.getCurrentPositionAsync({});
        return {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
        };
    } catch (error) {
        Alert.alert("Location Error", "Unable to fetch current location.");
        throw error;
    }
};
