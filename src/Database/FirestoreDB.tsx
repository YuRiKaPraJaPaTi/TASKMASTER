import firestore from "@react-native-firebase/firestore";
import { Task } from "../navigation/types";
import { Alert } from "react-native";

const tasksCollection = firestore().collection('Users')

export const addTaskToFirestore = async (userID: string, task: Omit<Task, 'userID'>) => {
  try {
    await tasksCollection
      .doc(userID)
      .collection('tasks')
      .doc(String(task.id))
      .set(task)

      Alert.alert('task saved to firestore')
  } catch (error) {
    Alert.alert('failed to save task')
  }
};


export const getTasksFromFirestore = (
  userID: string,
  callback: (tasks: Task[]) => void
) => {
  const unsubscribe = tasksCollection
    .doc(userID)
    .collection('tasks')
    .onSnapshot(snapshot => {
      const tasks: Task[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: Number(doc.id),
          title: data.title,
          description: data.description,
          date: data.date,
          isChecked: data.isChecked ?? false,
          userID: userID, 
        };
      });

      callback(tasks); 
    });

  return unsubscribe;
};

export const editTaskInFirestore = async (userID: string, task: Task) => {
  try {
    await tasksCollection
      .doc(userID)
      .collection('tasks')
      .doc(String(task.id))
      .update({
        title: task.title,
        description: task.description,
        date: task.date,
        isChecked: task.isChecked,
      });

    Alert.alert('Task updated successfully');
  } catch (error) {
    Alert.alert('Failed to update task');
    console.error(error);
  }
};

export const deleteTaskFromFirestore = async (userID: string, taskID: string) => {
  try {
    await tasksCollection
      .doc(userID)
      .collection('tasks')
      .doc(taskID) 
      .delete();

    Alert.alert('Task deleted successfully');
  } catch (error) {
    Alert.alert('Failed to delete task');
    console.error(error);
  }
};


export const toogleTaskStatusInFirestore = async (userID:string, taskID: string, newStatus: boolean) => {
  try {
    await tasksCollection
      .doc(userID)
      .collection('tasks')
      .doc(taskID)
      .update({isChecked: newStatus})
  } catch (error) {
    Alert.alert('error toggling task status')
  }
}


