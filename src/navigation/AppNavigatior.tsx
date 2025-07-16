/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TodoScreen from '../screens/TodoScreen';
import AddScreen from '../screens/AddScreen';
import DetailsTaskScreen from '../screens/DetailsTaskScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Todo">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="DetailsTask" component={DetailsTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
