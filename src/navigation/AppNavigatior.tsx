/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../screens/AddScreen';
import DetailsTaskScreen from '../screens/DetailsTaskScreen';
import { RootStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import 'react-native-gesture-handler';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';



const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {

  return (
  
          
          <Stack.Navigator initialRouteName="Tabs">
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Tabs" component={BottomTabNavigator}  
            options={({ route }) => {
              // headerShown: false
              const routeName = getFocusedRouteNameFromRoute(route) ;
              return {
                drawerLabel: routeName, 
                title: routeName        
                };
              }}
            />

            {/* <Stack.Screen 
              name="Add" 
              component={AddScreen} 
              options={{
                presentation: 'modal',
                animation: 'slide_from_bottom', 
                headerShown: false,
              }}  
            /> */}

            <Stack.Group screenOptions={{ 
                presentation: 'modal',  
                animation: 'slide_from_bottom'}}
              >
              <Stack.Screen name="Add" component={AddScreen} options={{headerShown: false}}/>
              <Stack.Screen name="DetailsTask" component={DetailsTaskScreen} />
            </Stack.Group>

            
          </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
