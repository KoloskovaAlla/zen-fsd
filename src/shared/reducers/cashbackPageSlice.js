import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const onGetCashbackPage = async (_, thunkApi) => {
  try {
    const /** @type {*} */ state = thunkApi.getState();
    const { lang } = state.langsReducer;
    const url = `${API_BASE_URL}/${lang}/pages/cashback/.json`;
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

/** @type {any} */
const getCashbackPage = createAsyncThunk(
  'cashbackPage/getCashbackPage',
  onGetCashbackPage,
);

/**
 * @typedef {import('./types').CashbackPageState} State
 * @type {State}
 */

const initialState = {
  isCashbackPageLoading: false,
  cashbackPage: null,
  cashbackPageErrorMessage: '',
};

const cashbackPageSlice = createSlice({
  name: 'cashbackPage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getCashbackPage.pending}`]: (state) => {
      state.isCashbackPageLoading = true;
      state.cashbackPage = null;
      state.cashbackPageErrorMessage = '';
    },
    [`${getCashbackPage.fulfilled}`]: (state, { payload }) => {
      state.isCashbackPageLoading = false;
      state.cashbackPage = payload;
      state.cashbackPageErrorMessage = '';
    },
    [`${getCashbackPage.rejected}`]: (state, { payload }) => {
      state.isCashbackPageLoading = false;
      state.cashbackPage = null;
      state.cashbackPageErrorMessage = payload;
    },
  }
});

export { getCashbackPage };
export const { reducer: cashbackPageReducer } = cashbackPageSlice;
