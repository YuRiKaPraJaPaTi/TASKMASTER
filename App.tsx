/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, Platform, PermissionsAndroid, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigatior';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './src/redux/hooks';
import { setTasks } from './src/redux/todoSlice';
import { RootState } from './src/redux/store';
import Mainapp from './Mainapp'
import messaging from '@react-native-firebase/messaging';

// const Stack = createNativeStackNavigator();

function App() {

  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
        Alert.alert(
          'Permission Required',
          'Please allow notifications to stay updated.'
        );
      }
    } else {
      // iOS or older Android versions
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('iOS/older Android permission granted');
      }
    }
  };

  const getFCMToken = async () => {
    const token = await messaging().getToken();
    // console.log('FCM Token:', token);
  };

  useEffect(() => {
    requestNotificationPermission();
    getFCMToken();

    // Foreground message listener
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // console.log('Received foreground message:', remoteMessage);
      Alert.alert('New Notification', remoteMessage.notification?.title || 'You have a new notification!');
    });

    return unsubscribe; 
  
  }, []);
  
  return (
    <Provider store={store}>
      <Mainapp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
