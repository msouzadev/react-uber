import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
// import styles from './styles';

const Directions = ({destination,origin,onReady}) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyDH8uVdI0pLH0o9rDJGFLfErkCJP-CxV2A"
        strokeWidth={3}
        strokeColor="#222"
    />
    );

export default Directions;
