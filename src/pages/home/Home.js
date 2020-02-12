import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { StackActions } from 'react-navigation';
import ProfilePage from '../profile/Profile';

import styles from './Styles';
import { Platform, View, Text, Image } from 'react-native';

const HomePage = ({navigation}) => {
  const [userLocation, setUserLocation] = useState({});
  const [locationLoaded, setFinishedLoading] = useState(false);
  const [mapRegion, setRegion] = useState({ latitude: 0, longitude: 0,  latitudeDelta: 1, longitudeDelta: 1});

  const DEFAULT_ZOOM = 12;
  useEffect(( ) => {
    loadUserLocation();

    // setTimeout(() => {
      navigation.push('Profile');
    // }, 10000)
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
    setRegion(newRegion);
  }

  return (
    <>
      <MapView
        region={mapRegion}
      style={styles.mapView}>
        { locationLoaded && (
          <Marker
            coordinate={{ latitude: userLocation.lat, longitude: userLocation.lng }}>
            <Image 
              style={styles.avatarImage}
              source={{uri: "https://avatars2.githubusercontent.com/u/9057186?s=460&v=4"}} />
            <Callout>
              <View style={styles.popUpView}>
                <Text style={styles.popUpTitle}>Username</Text>
                <Text style={styles.popUpText}>Bio</Text>
                <Text style={styles.popUpText}>Techs</Text>
              </View>
              </Callout>            
            
          </Marker>
        )}

      </MapView>
    </>
  );
};

export default HomePage;