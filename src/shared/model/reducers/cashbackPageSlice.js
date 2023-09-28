import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getCashbackPage = createAsyncThunk(
  'cashbackPage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/cashback/.json`;

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
