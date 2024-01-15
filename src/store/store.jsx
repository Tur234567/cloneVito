import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/auth";
import authReducer from "./slices/auth";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
