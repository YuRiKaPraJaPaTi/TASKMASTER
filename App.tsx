/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/navigation/AppNavigatior';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
