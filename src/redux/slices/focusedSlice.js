import { createSlice } from "@reduxjs/toolkit";

const focusedSlice = createSlice({
  name: "focused",
  initialState: {
    status: false,
    isScroll: 0,
  },
  reducers: {
    setFocus: (state, action) => {
      state.status = action.payload;
    },
    setIsScroll: (state, action) => {
      state.isScroll = action.payload
    }
  },
});

export const { setFocus, setIsScroll } = focusedSlice.actions;
export default focusedSlice.reducer;
