import { createSlice } from '@reduxjs/toolkit';
import { bussiness, category, items } from 'test/data';

const name = 'bussiness';
const bussinessSlice = createSlice({
  name,
  initialState: { bussiness, category, items },
  reducers: {

  },
});

export const {} = bussinessSlice.actions;

export default { [name]: bussinessSlice.reducer }

