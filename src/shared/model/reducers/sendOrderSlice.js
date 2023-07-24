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
  isSending: false,
  errorMessage: '',
  isOrderSended: false,
};

const sendOrderSlice = createSlice({
  name: 'sendingData',
  initialState,
  reducers: {},
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
