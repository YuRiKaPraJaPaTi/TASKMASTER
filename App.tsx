/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
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

  async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getToken = async()=> {
  const token = await messaging().getToken()
  console.log("token: ", token)
}

useEffect(()=>{
  requestUserPermission()
  getToken()
},[])
  
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
