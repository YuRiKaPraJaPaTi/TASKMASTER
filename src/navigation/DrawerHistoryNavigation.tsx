import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerHistoryParamList } from './types';
import AllTaskScreen from '../screens/AllTaskScreen';
import ActiveTaskScreen from '../screens/ActiveTaskScreen';
import CompletedTaskScreen from '../screens/CompletedTaskScreen';


const Drawer = createDrawerNavigator<DrawerHistoryParamList>();

function DrawerHistoryNavigation() {
  return (
      
    <Drawer.Navigator
      initialRouteName='All'
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        }}}
    >
      <Drawer.Screen name="All" component={AllTaskScreen} />
      <Drawer.Screen name="Active" component={ActiveTaskScreen} />
      <Drawer.Screen name="Completed" component={CompletedTaskScreen} />
    </Drawer.Navigator>

  );
}

export default DrawerHistoryNavigation