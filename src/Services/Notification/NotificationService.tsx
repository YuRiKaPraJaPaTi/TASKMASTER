import messaging from '@react-native-firebase/messaging';
import notifee, { EventType, AndroidImportance } from '@notifee/react-native';
import { navigationRef } from '../../navigation/NavigatioRef';
import { createNotificationChannel } from './DisplayNotification';

// Setup Foreground Notification Listener
export async function setupForegroundNotificationListener() {
      messaging().onMessage(async remoteMessage => {
            if (remoteMessage?.notification) {
                  await notifee.displayNotification({
                  title: remoteMessage.notification.title,
                  body: remoteMessage.notification.body,
                  android: {
                  channelId: 'default',
                  importance: AndroidImportance.HIGH,
                  },
                  data: remoteMessage.data,
                  });
            }
      });
}

// Setup Notification Click Event
export const setupNotificationEvents = () => {
      createNotificationChannel();

      notifee.onForegroundEvent(({ type, detail }) => {
            if (type === EventType.PRESS) {
                        navigationRef.current?.navigate('Tabs', {
                        screen: 'Profile',  
                        });
            }
      });


      //   Background Notification Listener
      messaging().setBackgroundMessageHandler(async remoteMessage => {
      //     console.log('Message handled in the background!', remoteMessage);
            if (remoteMessage?.notification) {
                  navigationRef.navigate('Tabs', {
                        screen: 'History',
                              params: {
                              screen: 'All',
                              },
                        }
                  );
            }
      });
}



