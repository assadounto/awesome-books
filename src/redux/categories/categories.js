import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CHECK_STATUS: () => 'Under Construction',
  },
});

export default categories.reducer;
export const { CHECK_STATUS } = categories.actions;
