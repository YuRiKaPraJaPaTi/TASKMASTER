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
      },

})

export const { addTask, deleteTask, updateForm} = todoSlice.actions;

export default todoSlice.reducer;