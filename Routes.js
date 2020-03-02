import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './src/pages/home/Home';
import ProfilePage from './src/pages/profile/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Home : {
      screen: HomePage
    },
    Profile: {
      screen: ProfilePage
    }
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#A9C748',
      },
      
      headerTintColor: '#AAA',
      headerTitleStyle: {
        fontSize: 22,
        color: '#FFF'
      }
    }
  })
);

export default Routes;