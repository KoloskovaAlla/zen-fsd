import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').ErrorModalState} InitState
 */

/** @type InitState */
const initialState = {
  isErrorMessage: false,
  errorMessage: 'no error',
};

export const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState,
  reducers: {
    setIsErrorMessage: (state, { payload }) => {
      state.isErrorMessage = payload;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const { reducer: errorModalReducer } = errorModalSlice;
export const { setIsErrorMessage, setErrorMessage } = errorModalSlice.actions;
