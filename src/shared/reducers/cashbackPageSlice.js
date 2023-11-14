import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 */


/**
 * @function onGetCashbackPage
 * @param {null} _ 
 * @param {ThunkAPI} thunkAPI 
 * @returns 
 */

const onGetCashbackPage = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}`; //уточиить
    const url = `${API_BASE_URL}/${lang}/${endpoint}.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

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
