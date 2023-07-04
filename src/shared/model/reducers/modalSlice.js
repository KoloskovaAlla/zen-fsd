import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getModal = createAsyncThunk(
  'modal/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/modal/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(data);
    }
    catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

/**
 * @typedef {import('./types').ModalState} State
 * @type {State}
 */
const initialState = {
  isModalActive: false,
  isLoading: false,
  modalData: null,
  errorMessage: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalActive: (state, { payload }) => {
      state.isModalActive = payload;
    },
  },
   extraReducers: {
    [`${getModal.pending}`]: (state) => {
      state.isLoading = true;
      state.modalData = {};
      state.errorMessage = '';
    },
    [`${getModal.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.modalData = payload;
      state.errorMessage = '';
    },
    [`${getModal.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.modalData = {};
      state.errorMessage = payload;
    },
  }
});

export { getModal}
export const { reducer: modalReducer } = modalSlice;
export const { setIsModalActive } = modalSlice.actions;
