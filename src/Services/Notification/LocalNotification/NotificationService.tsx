import messaging from '@react-native-firebase/messaging';
import notifee, { EventType, AndroidImportance } from '@notifee/react-native';
import { navigationRef } from '../../../navigation/NavigatioRef';

// Setup Notification Click Event
export const setupNotificationEvents = () => {

  // Foreground notification click
  notifee.onForegroundEvent(({ type, detail }) => {
    if (type === EventType.PRESS) {
      const taskId = detail.notification?.data?.taskId;
      if (taskId) {
        navigationRef.current?.navigate('DetailsTask', { taskId: Number(taskId) });
      }
    }
  });

  // Background notification click
  notifee.onBackgroundEvent(async ({ type, detail }) => {
    if (type === EventType.PRESS) {
      const taskId = detail.notification?.data?.taskId;
      if (taskId) {
        // Delay a bit to ensure navigation is ready
        setTimeout(() => {
          navigationRef.current?.navigate('DetailsTask', { taskId: Number(taskId) });
        }, 1000);
      }
    }
  });

};




