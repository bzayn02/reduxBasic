import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    form: [],
  },
  reducers: {
    addListData: (state, actions) => {
      state.form = [...state.form, actions.payload];
    },
  },
});

const { reducer, actions } = userSlice;
export const { addListData } = actions;

export default reducer;
