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

