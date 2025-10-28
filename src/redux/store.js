import { configureStore } from "@reduxjs/toolkit";
import focusedReducer from "./slices/focusedSlice";
import showModal from "./slices/showModal";

const PERSIST_KEYS = "app_auth";

const storage = localStorage;

const store = configureStore({
  reducer: {
    focused: focusedReducer,
    setModal: showModal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  const state = store.getState();
  const data = {
    isAuthenticated: state.auth?.isAuthenticated,
    user: state.auth?.user,
  };

  storage.setItem(PERSIST_KEYS, JSON.stringify(data));
});

export default store;
