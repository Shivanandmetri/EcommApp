import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-toolkit/features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
