import { configureStore } from "@reduxjs/toolkit";
import focusedReducer from "./slices/focusedSlice";
import showModal from "./slices/showModal";

const store = configureStore({
  reducer: { 
    focused: focusedReducer,
    setModal: showModal 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store