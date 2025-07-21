import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerHistoryParamList } from './types';
import AllTaskScreen from '../screens/AllTaskScreen';
import ActiveTaskScreen from '../screens/ActiveTaskScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './AppNavigatior';

const Drawer = createDrawerNavigator<DrawerHistoryParamList>();

function DrawerNavigation() {
  return (
        <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName='Menu'
            screenOptions={{
              headerShown: true,
              drawerType: 'slide',
              drawerStyle: {
                backgroundColor: '#fff',
                width: 250,
              }}}
          >
            <Drawer.Screen name='Menu' component={AppNavigator} />
            <Drawer.Screen name="All" component={AllTaskScreen} />
            <Drawer.Screen name="Active" component={ActiveTaskScreen} />
            <Drawer.Screen name="Completed" component={CompletedTaskScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default DrawerNavigation