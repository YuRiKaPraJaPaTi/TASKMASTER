import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { navigationRef } from '../../navigation/NavigatioRef';


const NOTIFICATION_CHANNEL_ID = 'important';
let isChannelCreated = false;

// 1. Create Notification Channel
export const createNotificationChannel = async () => {
  if (!isChannelCreated) {
    await notifee.createChannel({
      id: NOTIFICATION_CHANNEL_ID,
      name: 'Important Notification',
      importance: AndroidImportance.HIGH,
    });
    isChannelCreated = true;
  }
};

// 2. Display Notification Helper
const displayNotification = async (remoteMessage: any) => {
  const { title, body } = remoteMessage.notification || {};
  const { taskId } = remoteMessage.data || {};

  await notifee.displayNotification({
    title: title || 'New Notification',
    body: body || '',
    android: {
      channelId: NOTIFICATION_CHANNEL_ID,
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'default', // required to trigger onPress
      },
    },
    data: remoteMessage.data,
  });

  if (taskId && navigationRef.current) {
    navigationRef.current.navigate('DetailsTask', { taskId: Number(taskId) });
  }
};

export const setupForegroundNotificationListener = () => {
  messaging().onMessage(async remoteMessage => {
    await displayNotification(remoteMessage);
  });
};

export const setupBackgroundNotificationListener = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    await displayNotification(remoteMessage);
  });
};

// 3. Handle Notification Taps (from background/quit state)
export const onNotificationOpenedApp = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    const taskId = remoteMessage?.data?.taskId;
    if (taskId) {
      navigationRef.current?.navigate('DetailsTask', { taskId: Number(taskId) });
    }
  });

  // Handle if the app was launched by tapping a notification (cold start)
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      const taskId = remoteMessage?.data?.taskId;
      if (taskId) {
        navigationRef.current?.navigate('DetailsTask', { taskId: Number(taskId) });
      }
    });
}; 