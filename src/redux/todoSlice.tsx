import { createSlice} from "@reduxjs/toolkit";
import { Task } from "../navigation/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
      tasks: Task[]
}

const initialState: TodoState = {
      tasks: [],
}

const todoSlice = createSlice({
      name: 'Task',
      initialState: initialState,   
      reducers: {
            addTask: (state, action: PayloadAction<Task>) => {
                  state.tasks.push(action.payload)
            },
            handleDetails: () => {

            },
            deleteTask: (state, action: PayloadAction<number>) => {
                  state.tasks = state.tasks.filter(task => task.id !== action.payload)
            },
      },

})

export const { addTask, handleDetails, deleteTask} = todoSlice.actions;

export default todoSlice.reducer;