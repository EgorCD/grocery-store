import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Alert, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { COMMON_STYLES } from '../styles/styles';
import { getCoordinates } from '../services/api';

function Map({ initialAddress }) {
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

    useEffect(() => {
        if (initialAddress) {
            getCoordinates(initialAddress)
                .then(coords => {
                    setRegion({
                        ...coords,
                        latitudeDelta: 0.0322,
                        longitudeDelta: 0.0221,
                    });
                })
                .catch(err => Alert.alert('Error', err.message));
        }
    }, [initialAddress]);

    if (!region) {
        return (
            <View style={COMMON_STYLES.mapPlaceholder}>
                <Text style={COMMON_STYLES.alertText}>Loading Map...</Text>
            </View>
        );
    }

    return (
        <View style={COMMON_STYLES.mapContainer}>
            <MapView style={{ flex: 1 }} region={region} showsUserLocation>
                <Marker coordinate={region} title="Current Location" />
            </MapView>
        </View>
    );
}

export default Map;
