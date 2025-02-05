import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (prevMiddleware) => prevMiddleware().concat(apiSlice.middleware),
});

export default store;
