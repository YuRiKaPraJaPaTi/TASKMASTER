import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../navigation/types";

export const storeTaskToStorage = async (tasks: Task[]) => {
      try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
      } catch (error) {
            console.error('failed to save task', error)
      }
}


export const getTasksFromStorage = async () => {
      try {
            const data = await AsyncStorage.getItem('tasks')
            return data ? JSON.parse(data) : []
      } catch (error) {
            console.log('failed to load task', error)
            return []
      }
      
}