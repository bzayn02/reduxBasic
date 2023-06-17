import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increase: (state) => {
      state.counter = state.counter + 1;
    },
    decrease: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { increase, decrease } = actions;

export default reducer;
