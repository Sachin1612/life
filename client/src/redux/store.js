import { configureStore } from "@reduxjs/toolkit";
import bussiness from "./slices/bussinessSlice";
import post from "./slices/postSlice";
import user from "./slices/userSlice";

export default configureStore({
  reducer: {
    ...user,
    ...post,
    ...bussiness,
  },
});
