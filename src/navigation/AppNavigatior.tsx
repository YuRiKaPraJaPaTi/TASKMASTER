/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../screens/BottomTab/Home/AddScreen';
import DetailsTaskScreen from '../screens/BottomTab/Home/DetailsTaskScreen';
import { RootStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import 'react-native-gesture-handler';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useEffect, useLayoutEffect, useState } from 'react';
import AccountDetailScreen from '../screens/BottomTab/Profile/AccountDetailScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  // const route = useRoute();
  // const navigation = useNavigation();

  // const getActiveRouteName = (r: any): string => {
  //   while (r?.state && r.state.index != null) {
  //     r = r.state.routes[r.state.index];
  //   }
  //   return r?.name || 'Menu';
  // };

  // useLayoutEffect(() => {
  //   const routeName = getActiveRouteName(route);
  //   navigation.setOptions({ title: routeName });
  // }, [route]);

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
            // options={{headerShown: true}}
            
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
              <Stack.Screen name='AccountDetails' component={AccountDetailScreen} />
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
