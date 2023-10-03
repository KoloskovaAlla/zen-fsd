import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getWarrantyPage = createAsyncThunk(
  'warrantyPage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/warranty/.json`;

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
 * @typedef {import('./types').WarrantyPageState} State 
 * @type {State} 
 */

const initialState = {
  isWarrantyPageLoading: false,
  warrantyPage: null,
  warrantyPageErrorMessage: '',
};

const warrantyPageSlice = createSlice({
  name: 'warrantyPage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getWarrantyPage.pending}`]: (state) => {
      state.isWarrantyPageLoading = true;
      state.warrantyPage = null;
      state.warrantyPageErrorMessage = '';
    },
    [`${getWarrantyPage.fulfilled}`]: (state, { payload }) => {
      state.isWarrantyPageLoading = false;
      state.warrantyPage = payload;
      state.warrantyPageErrorMessage = '';
    },
    [`${getWarrantyPage.rejected}`]: (state, { payload }) => {
      state.isWarrantyPageLoading = false;
      state.warrantyPage = null;
      state.warrantyPageErrorMessage = payload;
    },
  }
});

export { getWarrantyPage };
export const { reducer: warrantyPageReducer } = warrantyPageSlice;
