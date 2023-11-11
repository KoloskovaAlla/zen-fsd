import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getOrder = createAsyncThunk(
  'order/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langsReducer;
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

/** @type {any} */
const sendOrder = createAsyncThunk(
  'order/sendData',
  async (order, thunkApi) => {
    const url = `${API_BASE_URL}/orders/.json`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });
      if (!response.ok) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(response.ok);
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
  name: '',
  isValidName: true,
  tel: '',
  isValidTel: true,
  email: '',
  isValidEmail: true,
  connection: '',
  isValidConnection: true,
  isChecked: false,
  isSubmitDisabled: true,
  isSending: false,
  isOrderSended: false,
  isDataSent: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setIsModalActive: (state, { payload }) => {
      state.isModalActive = payload;
    },
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setIsValidName: (state, { payload }) => {
      state.isValidName = payload;
    },
    setTel: (state, { payload }) => {
      state.tel = payload;
    },
    setIsValidTel: (state, { payload }) => {
      state.isValidTel = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setIsValidEmail: (state, { payload }) => {
      state.isValidEmail = payload;
    },
    setConnection: (state, { payload }) => {
      state.connection = payload;
    },
    setIsValidConnection: (state, { payload }) => {
      state.isValidConnection = payload;
    },
    setIsChecked: (state, { payload }) => {
      state.isChecked = payload;
    },
    setIsSubmitDisabled: (state, { payload }) => {
      state.isSubmitDisabled = payload;
    },
    setIsDataSent: (state, { payload }) => {
      state.isDataSent = payload;
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
    [`${sendOrder.pending}`]: (state) => {
      state.isSending = true;
      state.isOrderSended = false;
      state.errorMessage = '';
    },
    [`${sendOrder.fulfilled}`]: (state) => {
      state.isSending = false;
      state.isOrderSended = true;
      state.errorMessage = '';
    },
    [`${sendOrder.rejected}`]: (state, { payload }) => {
      state.isSending = false;
      state.isOrderSended = false;
      state.errorMessage = payload;
    },
  }
});

export { getOrder };
export { sendOrder };
export const { reducer: orderReducer } = orderSlice;
export const orderActions = orderSlice.actions;
