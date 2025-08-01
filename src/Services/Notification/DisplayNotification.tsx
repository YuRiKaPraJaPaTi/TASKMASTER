
import notifee, { AndroidImportance } from '@notifee/react-native';
import { Task } from '../../navigation/types';


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

//display immediate notification after task added
export const showImmediateNotification = async (task: Task) => {
  await notifee.displayNotification({
    title: 'New Task Added',
    body: task.title,
    android: {
      channelId: 'important',
      pressAction: {
        id: 'default',
      },
    },
    data: {
      taskId: task.id.toString(),
    },
  });
};
