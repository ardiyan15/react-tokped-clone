import { configureStore } from "@reduxjs/toolkit";
import focusedReducer from "./slices/focusedSlice";
import showModal from "./slices/showModal";
import authReducer from "./slices/authSlice";

const PERSIST_KEYS = "app_auth";

const storage = localStorage;

const loadAuth = () => {
  try {
    const raw = storage.getItem(PERSIST_KEYS);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const preloadAuth = loadAuth();

const store = configureStore({
  reducer: {
    focused: focusedReducer,
    setModal: showModal,
    auth: authReducer,
  },
  preloadedState: preloadAuth ? { auth: preloadAuth } : undefined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  const { auth } = store.getState();
  // const data = {
  //   // isAuthenticated: state.auth?.isAuthenticated,
  //   user: state.auth?.user,
  // };
  storage.setItem(PERSIST_KEYS, JSON.stringify(auth));
});

export default store;
