import React, { useEffect, useState } from 'react';
import { Platform, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import DelayInput from "react-native-debounce-input";

import ProfileService from '../../services/ProfileService';
import styles from './Styles';

const HomePage = ({navigation}) => {
  const [userLocation, setUserLocation] = useState({}, (test) => {
    console.log(test);
  });
  const [searchText, setText] = useState('');
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

  function handleInput(text) {
    // console.log(ProfileService);
    // console.log(service);
    // ProfileService.fetchAllProfiles();
    ProfileService.fetchAllProfiles(text);
  }

  function resetPositionToDefault() {
    const initPos = {
      latitude: userLocation.lat,
      longitude: userLocation.lng,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025
    };

    setRegion(initPos)
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
      <View style={styles.inputFloating}>
        <DelayInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={(e) => {handleInput(e)}}
          delayTimeout={600}
          minLength={3}
          clearButtonMode="always"
          on
          placeholder="Buscar por tecnologia..."
        />
        <View style={styles.buttonArea}>
          { locationLoaded && (
            <TouchableOpacity style={styles.searchButton} onPress={resetPositionToDefault}>
              <Image style={styles.targetImage} source={{uri: "https://images.vexels.com/media/users/3/128866/isolated/preview/9d104cd78be9c669adf883bf1eb37c92-target-icon-svg-by-vexels.png"}} />
            </TouchableOpacity>
          ) }
        </View>
        
      </View>
      <MapView
        compassOffset={{x: 100, y: 100}}
        region={mapRegion}
        style={styles.mapView}>
        { locationLoaded && (
          <Marker
            coordinate={{ latitude: userLocation.lat, longitude: userLocation.lng }}>
            <Image 
              style={{...styles.avatarImage, borderWidth: 2}}
              source={{uri: "https://avatars2.githubusercontent.com/u/9057186?s=460&v=4"}} />
            <Callout onPress={() => {navigation.navigate('Profile')}}>
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