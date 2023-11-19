import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').CashbackFromAPI} CashbackFromAPI
 */

/**
 * @function onGetCashback
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<CashbackFromAPI | string>}
 */

const onGetCashback = async (_, thunkAPI) => {
  const  /**  @type {*} */state = thunkAPI.getState();
  const { lang } = state.langsReducer;
  const endpoint = lang;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.cashback);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {*} */
const getCashback = createAsyncThunk(
  'cashback/getCashback',
  onGetCashback,
);

const initialState = {
  isCashbackLoading: false,
  /** @type {null | CashbackFromAPI} */
  cashback: null,
  cashbackErrorMessage: '',
};

const cashbackSlice = createSlice({
  name: 'cashback',
  initialState,
  reducers: {},
  extraReducers: {
    [getCashback.pending]: (state) => {
      state.isCashbackLoading = true;
      state.cashback = null;
      state.cashbackErrorMessage = '';
    },
    [getCashback.fulfilled]: (state, { payload }) => {
      state.isCashbackLoading = false;
      state.cashback = payload;
      state.cashbackErrorMessage = '';
    },
    [getCashback.rejected]: (state, { payload }) => {
      state.isCashbackLoading = false;
      state.cashback = null;
      state.cashbackErrorMessage = payload;
    },
  }
});

export { getCashback };
export const { reducer: cashbackReducer } = cashbackSlice;
