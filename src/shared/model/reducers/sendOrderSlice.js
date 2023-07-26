import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

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
    }
    catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
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
  errorMessage: '',
  isOrderSended: false,
};

const sendOrderSlice = createSlice({
  name: 'sendingData',
  initialState,
  reducers: {
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
  },
  extraReducers: {
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

export { sendOrder };
export const { reducer: sendOrderReducer } = sendOrderSlice;
export const {  
  setName, 
  setIsValidName, 
  setTel, 
  setIsValidTel, 
  setEmail, 
  setIsValidEmail, 
  setConnection,
  setIsValidConnection,
  setIsChecked,
  setIsSubmitDisabled
} = sendOrderSlice.actions;
