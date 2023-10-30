import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getOrder = createAsyncThunk(
  'order/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/modal/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!Object.values(data).length) throw new Error('Data is empty');
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

/**
 * @typedef {import('./types').OrderState} State
 * @type {State}
 */
const initialState = {
  isModalActive: false,
  isLoading: false,
  orderData: null,
  errorMessage: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setIsModalActive: (state, { payload }) => {
      state.isModalActive = payload;
    },
  },
  extraReducers: {
    [`${getOrder.pending}`]: (state) => {
      state.isLoading = true;
      state.orderData = null;
      state.errorMessage = '';
    },
    [`${getOrder.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.orderData = payload;
      state.errorMessage = '';
    },
    [`${getOrder.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.orderData = {};
      state.errorMessage = payload;
    },
  }
});

export { getOrder };
export const { reducer: orderReducer } = orderSlice;
export const { setIsModalActive } = orderSlice.actions;
