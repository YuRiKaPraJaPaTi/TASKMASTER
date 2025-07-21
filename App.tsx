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

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <DrawerNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
