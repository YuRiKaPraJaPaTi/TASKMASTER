import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../navigation/types";

const todoSlice = createSlice({
      name: 'Task',
      initialState: {
            tasks: []
      },    
      reducers: {
            addTask: () => {

            },
            handleDetails: () => {

            },
            deleteTask: () => {

            },
      },

})

export const { addTask, handleDetails, deleteTask} = todoSlice.actions;

export default todoSlice.reducer;