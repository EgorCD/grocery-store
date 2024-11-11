import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { COMMON_STYLES } from '../../styles/styles';
import { requestLocationPermission, getCurrentLocation } from '../../services/location';
import { generateMarkers } from '../../services/marker';
import LoadingIndicator from '../indicators/LoadingIndicator';

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
            <View style={COMMON_STYLES.loadingContainer}>
                <LoadingIndicator />
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
