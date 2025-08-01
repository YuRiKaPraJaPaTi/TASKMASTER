import notifee, { TriggerType } from '@notifee/react-native';
import { Task } from '../../../navigation/types';
import { Alert } from 'react-native';

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



// Function to schedule a notification 30 minutes before the task time
export const scheduleTaskReminder = async (task: Task) => {
      
      const taskDate = new Date(task.date);  // Convert the task date string to a Date object

      // Calculate the time 30 minutes before the task date
      const reminderTime = new Date(taskDate.getTime() - 30 * 60 * 1000); // 30 minutes in milliseconds
      console.log('Calculated Reminder Time:', reminderTime);

      // Create a notification channel (for Android)
      await notifee.createChannel({
      id: 'reminder',
      name: 'Task Reminder',
      importance: 4, 
      });

      // Schedule the notification
      await notifee.createTriggerNotification(
            {
                  title: 'Task Reminder',
                  body: `Reminder: ${task.title}`,
                  android: {
                  channelId: 'reminder',
                  smallIcon: 'ic_launcher',  
                  pressAction: {
                  id: 'default',
                  },
                  },
                  data: {
                  taskId: task.id.toString(),
                  },
            },
            {
                  // This is the trigger for when the notification should appear
                  type: TriggerType.TIMESTAMP,
                  timestamp: reminderTime.getTime(), 
            }
      );

      console.log('Task reminder scheduled:', reminderTime);
};
