import React from 'react';
import { Marker } from 'react-native-maps';

export const generateMarkers = (addresses) => {
    return addresses.map((location, index) => (
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
};
