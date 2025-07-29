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




// export const getTasksFromFirestore = async (userID: string): Promise<Task[]> => {
//   try {
//     const snapshot = await firestore()
//       .collection('users')
//       .doc(userID)
//       .collection('tasks')
//       .get();

//     const tasks: Task[] = snapshot.docs.map(doc => {
//       const data = doc.data();
//       return {
//         id: Number(doc.id), 
//         title: data.title,
//         description: data.description,
//         date: data.date,
//         isChecked: data.isChecked ?? false,
//         userID: userID,  
//       };
//     });

//     return tasks;
//   } catch (error) {
//     console.error(error);
//     Alert.alert('Error fetching tasks');
//     return [];
//   }
// };

