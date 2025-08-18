import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerHistoryParamList } from './types';
import AllTaskScreen from '../screens/TopTab/AllTaskScreen';
import ActiveTaskScreen from '../screens/TopTab/ActiveTaskScreen';
import CompletedTaskScreen from '../screens/TopTab/CompletedTaskScreen';
import AppNavigator from './AppNavigatior';
import { RouteProp } from '@react-navigation/native';
import { NavigationState } from '@react-navigation/native';

const Drawer = createDrawerNavigator<DrawerHistoryParamList>();



function getActiveRouteName(route: RouteProp<any, any> | undefined): string | undefined {
  if (!route) return undefined;

  let currentRoute: any = route;

  while (currentRoute?.state?.index != null) {
    const state = currentRoute.state as NavigationState;
    currentRoute = state.routes[state.index];
  }

  return currentRoute?.name;
}




function DrawerNavigation() {
  return (
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
            <Drawer.Screen name='Menu' 
              component={AppNavigator} 
             options={({ route }) => {
    const activeRouteName = getActiveRouteName(route);
console.log('Active route:', getActiveRouteName(route));

    const labelMap: Record<string, string> = {
      Todo: 'Home',
      History: 'History',
      Profile: 'Profile',
    };

    return {
      drawerLabel: labelMap[activeRouteName || ''] || 'Menu',
      title: labelMap[activeRouteName || ''] || 'Menu',
    };
  }}
            />
            <Drawer.Screen name="All" component={AllTaskScreen} />
            <Drawer.Screen name="Active" component={ActiveTaskScreen} />
            <Drawer.Screen name="Completed" component={CompletedTaskScreen} />
          </Drawer.Navigator>
        
  );
}

export default DrawerNavigation