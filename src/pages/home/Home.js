import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './Styles';
import { Platform } from 'react-native';

const HomePage = () => {
  const [userLocation, setUserLocation] = useState({});
  const [locationLoaded, setFinishedLoading] = useState(false);
  const [mapRegion, setRegion] = useState({ latitude: 0, longitude: 0,  latitudeDelta: 1, longitudeDelta: 1});

  const DEFAULT_ZOOM = 12;
  useEffect(( ) => {
    loadUserLocation();
  }, []);

  function loadUserLocation() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }
    Geolocation.getCurrentPosition((pos) => {
      const lat =  pos.coords.latitude;
      const lng =  pos.coords.longitude;

      setUserLocation({lat, lng});
      setMapPosition({lat, lng});
      setFinishedLoading(true);
    }, err => {
      console.log('Err', err);
    });
  }

  // location : { lat, lng}
  function setMapPosition(location) {
    const newRegion = { 
      latitude: location?.lat, 
      longitude: location.lng,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    }
    console.log('New Region', newRegion);
    setRegion(newRegion);
  }

  function setMapRegion(region) {
    console.log('Region Set');
    setRegion(region);
  }

  return (
    <>
      <MapView
        region={mapRegion}
      style={styles.mapView}>
        { locationLoaded && (
          <Marker
            coordinate={{ latitude: userLocation.lat, longitude: userLocation.lng }}
            title="YOU"
            description="Your Current Location"
          >            
          </Marker>
        )}

      </MapView>
    </>
  );
};

export default HomePage;