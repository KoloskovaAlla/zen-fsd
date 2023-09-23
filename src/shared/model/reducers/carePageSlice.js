import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getCarePage = createAsyncThunk(
  'CarePage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/carepage/.json`;

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

// /**
//  * @typedef {import('./types').CarePageState} State 
//  * @type {State} 
//  */

const initialState = {
  isCarePageLoading: false,
  cashback: null,
  carePageErrorMessage: '',
};

const carePageSlice = createSlice({
  name: 'carePage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getCarePage.pending}`]: (state) => {
      state.isCarePageLoading = true;
      state.cashback = null;
      state.carePageErrorMessage = '';
    },
    [`${getCarePage.fulfilled}`]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.cashback = payload;
      state.carePageErrorMessage = '';
    },
    [`${getCarePage.rejected}`]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.cashback = null;
      state.carePageErrorMessage = payload;
    },
  }
});

export { getCarePage };
export const { reducer: cashbackReducer } = carePageSlice;
