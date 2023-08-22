import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  phone: 'string';
  call: boolean;
};

const initialState = {
  phone: '',
  call: false,
};

const phoneSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    addNumber: (state, { payload }: { payload: string }) => {
      state.phone = state.phone + payload;
      state.call = false;
    },
    deleteNumber: (state) => {
      state.phone = '';
      state.call = false;
    },
    changeCall: (state) => {
      state.phone;
      state.call = !state.call;
    },
  },
});

export const actions = phoneSlice.actions;
export default phoneSlice.reducer;
