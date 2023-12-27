import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').WarrantyPageFromAPI} WarrantyPageFromAPI
 */

/**
 * @function onGetWarrantyPage
 * @param {null} _
 * @param {*} thunkAPI
 * @returns {Promise<WarrantyPageFromAPI | null>}
 */

const onGetWarrantyPage = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.warrantyPage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {any} */
const getWarrantyPage = createAsyncThunk(
  'warrantyPage/getData',
  onGetWarrantyPage,
);

const initialState = {
  isWarrantyPageLoading: false,
  /** @type {null | WarrantyPageFromAPI} */
  warrantyPage: null,
  warrantyPageErrorMessage: '',
};

const warrantyPageSlice = createSlice({
  name: 'warrantyPage',
  initialState,
  reducers: {},
  extraReducers: {
    [getWarrantyPage.pending]: (state) => {
      state.isWarrantyPageLoading = true;
      state.warrantyPage = null;
      state.warrantyPageErrorMessage = '';
    },
    [getWarrantyPage.fulfilled]: (state, { payload }) => {
      state.isWarrantyPageLoading = false;
      state.warrantyPage = payload;
      state.warrantyPageErrorMessage = '';
    },
    [getWarrantyPage.rejected]: (state, { payload }) => {
      state.isWarrantyPageLoading = false;
      state.warrantyPage = null;
      state.warrantyPageErrorMessage = payload;
    },
  }
});

export { getWarrantyPage };
export const { reducer: warrantyPageReducer } = warrantyPageSlice;
