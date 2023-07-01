import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').ModalState} State
 * @type {State}
 */
const initialState = {
  isModalActive: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalActive: (state, { payload }) => {
      state.isModalActive = payload;
    },
  },
});

export const { reducer: modalReducer } = modalSlice;
export const { setIsModalActive } = modalSlice.actions;
