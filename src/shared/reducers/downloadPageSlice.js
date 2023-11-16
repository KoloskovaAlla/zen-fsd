import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').DownloadPageFromAPI} DownloadPageFromAPI
 */

/**
 *
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<DownloadPageFromAPI | string>}
 */

const onGetDownloadPage = async (_, thunkAPI) => {
  const /** @type {*} */ state = thunkAPI.getState();
  const { lang } = state.langsReducer;
  const endpoint = `${lang}`;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.downloadPage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {any} */
const getDownloadPage = createAsyncThunk(
  'downloadPage/getdownloadPage',
  onGetDownloadPage,
);

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
    [getDownloadPage.pending]: (state) => {
      state.isDownloadPageLoading = true;
      state.downloadPage = null;
      state.downloadPageErrorMessage = '';
    },
    [getDownloadPage.fulfilled]: (state, { payload }) => {
      state.isDownloadPageLoading = false;
      state.downloadPage = payload;
      state.downloadPageErrorMessage = '';
    },
    [getDownloadPage.rejected]: (state, { payload }) => {
      state.isDownloadPageLoading = false;
      state.downloadPage = null;
      state.downloadPageErrorMessage = payload;
    },
  }
});

export { getDownloadPage };
export const { reducer: downloadPageReducer } = downloadPageSlice;
