/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React, { useEffect } from 'react';
import {
  Platform,
  PermissionsAndroid,
  StatusBar,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { withAuthenticator } from 'aws-amplify-react-native'

import Router from './src/navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const App = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS == 'android') {
      // Android
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar />
      <Router />
    </>
  );
};

export default withAuthenticator(App);
