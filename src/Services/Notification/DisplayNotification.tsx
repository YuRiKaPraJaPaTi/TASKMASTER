
import { AndroidImportance } from '@notifee/react-native';
import notifee, { TriggerType } from '@notifee/react-native';
import { Task } from '../../navigation/types';
import messaging from '@react-native-firebase/messaging';


const NOTIFICATION_CHANNEL_ID = 'important';
let isChannelCreated = false;

// Create the notification channel once
export const createNotificationChannel = () => {
  if (!isChannelCreated) {
    notifee.createChannel({
      id: NOTIFICATION_CHANNEL_ID,
      name: 'Important Notification',
      importance: AndroidImportance.HIGH,
    });
    isChannelCreated = true;
  }
};

// // Display Notification
// export const displayNotification = (remoteMessage: { notification: { title?: string, body?: string }, data: any }) => {
 
//   createNotificationChannel();

//   notifee.displayNotification({
//     title: remoteMessage.notification?.title || 'New Notification',
//     body: remoteMessage.notification?.body || '',
//     android: {
//       channelId: NOTIFICATION_CHANNEL_ID,
//       smallIcon: 'ic_launcher', 
//         color: '#4caf50',
//       // actions: [
//       //   {
//       //     title: '<b>Dance</b> &#128111;',
//       //     pressAction: { id: 'dance' },
//       //   },
//       //   {
//       //     title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
//       //     pressAction: { id: 'cry' },
//       //   },
//       // ],
//       pressAction: {
//         id: 'default',
//       },
//     },
//     data: remoteMessage.data,  
//   });
// };


// // Setup Foreground Notification Listener
// export async function setupForegroundNotificationListener() {
//       messaging().onMessage(async remoteMessage => {
//             if (remoteMessage?.notification) {
//                   await notifee.displayNotification({
//                   title: remoteMessage.notification.title,
//                   body: remoteMessage.notification.body,
//                   android: {
//                   channelId: 'default',
//                   importance: AndroidImportance.HIGH,
//                   },
//                   data: remoteMessage.data,
//                   });
//             }
//       });
// }







