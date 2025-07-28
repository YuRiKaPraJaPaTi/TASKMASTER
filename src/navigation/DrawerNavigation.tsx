import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerHistoryParamList } from './types';
import AllTaskScreen from '../screens/AllTaskScreen';
import ActiveTaskScreen from '../screens/ActiveTaskScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';
import AppNavigator from './AppNavigatior';

const Drawer = createDrawerNavigator<DrawerHistoryParamList>();

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
            <Drawer.Screen name='Menu' component={AppNavigator} />
            <Drawer.Screen name="All" component={AllTaskScreen} />
            <Drawer.Screen name="Active" component={ActiveTaskScreen} />
            <Drawer.Screen name="Completed" component={CompletedTaskScreen} />
          </Drawer.Navigator>
        
  );
}

export default DrawerNavigation