/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddScreen from '../screens/BottomTab/Home/AddScreen';
import DetailsTaskScreen from '../screens/BottomTab/Home/DetailsTaskScreen';
import { RootStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import 'react-native-gesture-handler';
import AccountDetailScreen from '../screens/BottomTab/Profile/AccountDetailScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {

  return (
  
          
          <Stack.Navigator initialRouteName="Tabs">
            
            <Stack.Screen name="Tabs" component={BottomTabNavigator}  
              options={{headerShown: false}}
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
