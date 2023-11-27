import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const onGetWarrantyPage = async (_, thunkApi) => {
  try {
    const /** @type {*} */ state = thunkApi.getState();
    const { lang } = state.langReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkApi.fulfillWithValue(data.warrantyPage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkApi.rejectWithValue(message);
  };
};

/** @type {any} */
const getWarrantyPage = createAsyncThunk(
  'warrantyPage/getData',
  onGetWarrantyPage,
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
