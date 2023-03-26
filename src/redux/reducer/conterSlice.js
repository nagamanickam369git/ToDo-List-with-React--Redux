import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice(
  {
    name: "counter",
    initialState: {

      Todo: [],
      Assigned: [],
      Completed: [],
    },
    reducers: {

      AddTask: (state, action) => {
        let condition = action.payload.type;
        let conditions = action.payload;


        if (condition === "Unassigned") {
          if (conditions.TaskDescrption !== "" && conditions.TaskTitle !== "") {
            state.Todo.push(action.payload);
          }
        } else if (condition === "Assigned") {
          if (conditions.TaskDescrption !== "" && conditions.TaskTitle !== "") {
            state.Assigned.push(action.payload);
          }
        } else if (condition === "Completed") {
          if (conditions.TaskDescrption !== "" && conditions.TaskTitle !== "") {
            state.Completed.push(action.payload);
          }
        }
      },
      EditTask: (state, action) => {
        state.Todo = action.payload;
      },
      ChildTwo: (state, action) => {
        state.Assigned = action.payload;
      },
      ChildThree: (state, action) => {
        state.Completed = action.payload;
      },
    },
  },

);
export const {

  AddTask,
  EditTask,
  ChildTwo,
  ChildThree,
} = counterSlice.actions;
export default counterSlice.reducer;



