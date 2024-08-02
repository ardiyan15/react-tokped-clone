import { createSlice } from "@reduxjs/toolkit";

const focusedSlice = createSlice({
  name: "focused",
  initialState: {
    status: false,
  },
  reducers: {
    setFocus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setFocus } = focusedSlice.actions;
export default focusedSlice.reducer;
