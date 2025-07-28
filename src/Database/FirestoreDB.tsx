import firestore from "@react-native-firebase/firestore";
import { Task } from "../navigation/types";

const tasksCollection = firestore().collection('Tasks')

export const addTaskToFirestore = async (task: Task) => {
  await tasksCollection
  .doc(task.id.toString())
  .set({ ...task });
};

