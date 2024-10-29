import { Alert } from 'react-native';

export async function getCoordinates(address) {
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching coordinates: ' + response.statusText);
        }
        const data = await response.json();
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { latitude: lat, longitude: lng };
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        Alert.alert("Geocoding Error", error.message);
        throw error;
    }
}
