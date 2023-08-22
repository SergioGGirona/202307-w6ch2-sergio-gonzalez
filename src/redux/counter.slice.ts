import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  phone: string;
  call: boolean;
  info: string;
};

const initialState = {
  phone: '',
  call: false,
  info: '',
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
      state.phone = state.phone.slice(0, state.phone.length - 1);
      state.call = false;
    },
    call: (state) => {
      state.phone;
      state.call = true;
      state.info = 'Calling...';
    },

    hang: (state) => {
      state.phone = '';
      state.call = false;
      state.info = 'Hanged';
    },
  },
});

export const actions = phoneSlice.actions;
export default phoneSlice.reducer;
