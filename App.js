import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
