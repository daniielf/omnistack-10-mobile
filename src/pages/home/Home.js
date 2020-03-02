import React, { useEffect, useState } from 'react';
import { Platform, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import DelayInput from "react-native-debounce-input";

import ProfileService from '../../services/ProfileService';
import styles from './Styles';
import CustomMapStyle from '../../components/MapStyle';

const HomePage = ({navigation}) => {
  const [userLocation, setUserLocation] = useState({});
  const [searchText, setText] = useState('');
  const [users, setUsers] = useState([]);
  const [locationLoaded, setFinishedLoading] = useState(false);
  const [mapRegion, setRegion] = useState({ latitude: 0, longitude: 0,  latitudeDelta: 1, longitudeDelta: 1});

  useEffect(( ) => {
    loadUserLocation();
  }, []);

  function loadUserLocation() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }
    Geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setUserLocation({lat, lng});
      setMapPosition({lat, lng});
      setFinishedLoading(true);
    }, err => {
      console.log('Err', err);
    });
  }

  function fetchUsers(text) {
    ProfileService.fetchAllProfiles(text).then((users) => {
      console.log(users);
      console.log(users.map((e) => e.location.coordinates));
      setUsers(users);
    }).catch((err) => {
      console.log(err);
    });
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
    {
      !locationLoaded && (
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator size="large" color="#CACACA" />
        </View> 
      )
    }
      <View style={styles.inputFloating}>
        <DelayInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={(e) => {fetchUsers(e)}}
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
        compassOffset={{x: 2, y: 2}}
        showsCompass={true}
        region={mapRegion}
        // customMapStyle={CustomMapStyle}
        // provider={PROVIDER_GOOGLE}
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
        { users && (users.map((user) => {
          return (<Marker
                    key={user.id}
                    coordinate={{latitude: user.location.coordinates[1], longitude: user.location.coordinates[0]}}>
                  </Marker>)
          })
        )}

      </MapView>
    </>
  );
};

export default HomePage;