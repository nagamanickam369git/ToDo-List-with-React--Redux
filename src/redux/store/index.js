import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/conterSlice";
import act from "../reducer/conterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    sec: act,
  },
});

