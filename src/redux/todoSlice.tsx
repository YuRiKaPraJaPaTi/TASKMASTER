import { createSlice} from "@reduxjs/toolkit";
import { Task } from "../navigation/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
      tasks: Task[],
      form: {
            title: string,
            description: string,
            date: string,
      }
}



const initialState: TodoState = {
      tasks: [],
      form: {
            title: '',
            description: '',
            date: '',
      },
}

const todoSlice = createSlice({
      name: 'Task',
      initialState: initialState,   
      reducers: {
            setTasks: (state, action: PayloadAction<Task[]>) => {
                  state.tasks = action.payload
            },
            addTask: (state, action: PayloadAction<Task>) => {
                  state.tasks.push(action.payload)
            },
            deleteTask: (state, action: PayloadAction<number>) => {
                  state.tasks = state.tasks.filter(task => task.id !== action.payload)
            },
            updateForm: (state, action: PayloadAction<{field:string, value:string}>) => {
                  const {field, value} = action.payload;
                  state.form[field as keyof typeof state.form ] = value;
            },
            clearForm: (state) => {
                  state.form = {title:'', description: '', date: ''}
            },
            editTask: (state, action: PayloadAction<Task>) => {
                  
                  const updatedTask = action.payload;
                  const index = state.tasks.findIndex(task => task.id === updatedTask.id)
                  if (index !== -1) {
                        state.tasks[index] = updatedTask
                  }
            },
            toggleTaskCheck: (state, action: PayloadAction<number>) => {
                  const task = state.tasks.find(task => task.id === action.payload)
                  if (task) {
                        task.isChecked = !task.isChecked
                  }
            }
      },

})

export const { setTasks, addTask, deleteTask, updateForm, clearForm, editTask, toggleTaskCheck} = todoSlice.actions;

export default todoSlice.reducer;