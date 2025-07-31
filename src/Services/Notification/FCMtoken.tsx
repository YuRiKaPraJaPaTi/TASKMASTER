// services/notifications/permissions.ts
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';


export const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Notification permission granted');
    } else {
      console.log('Notification permission denied');
      Alert.alert(
        'Permission Required',
        'Please allow notifications to stay updated.'
      );
    }
  } else {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('iOS/older Android permission granted');
    }
  }
};

export const getFCMToken = async (userID: string) => {
  const token = await messaging().getToken();
  if (token) {
    await firestore()
      .collection('Users')
      .doc(userID)
      .update({ fcmToken: token });
    console.log('FCM Token saved to Firestore');
  }
};
