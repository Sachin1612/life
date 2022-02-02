import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../test/data';

const name = 'user';
const userSlice = createSlice({
  name,
  initialState: { users },
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
