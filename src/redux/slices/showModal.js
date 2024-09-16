import { createSlice } from "@reduxjs/toolkit";

const showModal = createSlice({
  name: "showed",
  initialState: {
    isShow: false,
  },
  reducers: {
    setShow: (state, action) => {
      state.isShow = action.payload;
    },
  },
});

export const { setShow } = showModal.actions;
export default showModal.reducer;
