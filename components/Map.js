import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Alert, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { COMMON_STYLES } from '../styles/styles';

function Map({ addresses }) {
    const [region, setRegion] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Location permission is required to show the map');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
            });
        })();
    }, []);

    if (!region) {
        return (
            <View style={COMMON_STYLES.mapPlaceholder}>
                <Text style={COMMON_STYLES.alertText}>Loading Map...</Text>
            </View>
        );
    }

    const outletMarkers = addresses.map((location, index) => (
        <Marker
            key={index}
            coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
            }}
            title={location.name}
            description={location.address}
        />
    ));

    return (
        <MapView style={{ flex: 1 }} region={region} showsUserLocation>
            {outletMarkers}
        </MapView>
    );
}

export default Map;
