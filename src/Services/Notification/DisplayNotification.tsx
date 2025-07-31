
import notifee, { AndroidImportance } from '@notifee/react-native';


let isChannelCreated = false;

// Create the notification channel once
export const createNotificationChannel = () => {
  if (!isChannelCreated) {
    notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
    isChannelCreated = true;
  }
};

// Display Notification
export const displayNotification = (remoteMessage: { notification: { title?: string, body?: string }, data: any }) => {
 
  createNotificationChannel();

  notifee.displayNotification({
    title: remoteMessage.notification?.title || 'New Notification',
    body: remoteMessage.notification?.body || '',
    android: {
      channelId: 'default',
      smallIcon: 'ic_launcher', 
      pressAction: {
        id: 'default',
      },
    },
    data: remoteMessage.data,  
  });
};
