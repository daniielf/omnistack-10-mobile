import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './src/pages/home/Home';


const Routes = createAppContainer(
  createStackNavigator({
    HomePage
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#A9C748',
      },
      headerTintColor: '#444',
      headerTitleStyle: {
        fontSize: 22
      }
    }
  })
);

export default Routes;