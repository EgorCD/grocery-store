import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { View, Text } from 'react-native';
import { COMMON_STYLES } from '../styles/styles';
import { requestLocationPermission, getCurrentLocation } from '../services/locationService';
import { generateMarkers } from '../services/markerService';

function Map({ addresses }) {
    const [region, setRegion] = useState(null);

    useEffect(() => {
        (async () => {
            const hasPermission = await requestLocationPermission();
            if (!hasPermission) {
                console.log("Location permission not granted. Cannot proceed with map display.");
                return;
            }

            try {
                const userLocation = await getCurrentLocation();
                setRegion(userLocation);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        })();
    }, []);

    if (!region) {
        return (
            <View style={COMMON_STYLES.mapPlaceholder}>
                <Text style={COMMON_STYLES.alertText}>Loading Map...</Text>
            </View>
        );
    }

    return (
        <MapView style={{ flex: 1 }} region={region} showsUserLocation>
            {generateMarkers(addresses)}
        </MapView>
    );
}

export default Map;
