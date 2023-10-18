import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getDownloadPage = createAsyncThunk(
  'download/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/download/.json`;

    try {
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
);

/**
 * @typedef {import('./types').DownloadPageState} State
 * @type {State}
 */

const initialState = {
  isDownloadPageLoading: false,
  downloadPage: null,
  downloadPageErrorMessage: '',
};

const downloadPageSlice = createSlice({
  name: 'downloadPage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getDownloadPage.pending}`]: (state) => {
      state.isDownloadPageLoading = true;
      state.downloadPage = null;
      state.downloadPageErrorMessage = '';
    },
    [`${getDownloadPage.fulfilled}`]: (state, { payload }) => {
      state.isDownloadPageLoading = false;
      state.downloadPage = payload;
      state.downloadPageErrorMessage = '';
    },
    [`${getDownloadPage.rejected}`]: (state, { payload }) => {
      state.isDownloadPageLoading = false;
      state.downloadPage = null;
      state.downloadPageErrorMessage = payload;
    },
  }
});

export { getDownloadPage };
export const { reducer: downloadPageReducer } = downloadPageSlice;
