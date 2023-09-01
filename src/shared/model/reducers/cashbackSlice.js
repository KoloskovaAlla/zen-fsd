import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getCashback = createAsyncThunk(
  'cashback/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/cashback/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!Object.values(data).length) throw new Error('Data is empty');
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
 * @typedef {import('./types').CashbackState} State 
 * @type {State} 
 */

const initialState = {
  isCashbackLoading: false,
  cashback: null,
  cashbackErrorMessage: '',
};

const cashbackSlice = createSlice({
  name: 'cashback',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getCashback.pending}`]: (state) => {
      state.isCashbackLoading = true;
      state.cashback = null;
      state.cashbackErrorMessage = '';
    },
    [`${getCashback.fulfilled}`]: (state, { payload }) => {
      state.isCashbackLoading = false;
      state.cashback = payload;
      state.cashbackErrorMessage = '';
    },
    [`${getCashback.rejected}`]: (state, { payload }) => {
      state.isCashbackLoading = false;
      state.cashback = null;
      state.cashbackErrorMessage = payload;
    },
  }
});

export { getCashback };
export const { reducer: cashbackReducer } = cashbackSlice;
