import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').InfoFromAPI} InfoFromAPI
 */

/**
 * @function onGetInfo
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<InfoFromAPI | string>}
 */

const onGetInfo = async (_, thunkAPI) => {
  const /** @type {*} */ state = thunkAPI.getState();
  const { lang } = state.langsReducer;
  const endpoint = lang;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
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
const getInfo = createAsyncThunk(
  'info/getInfo',
  onGetInfo,
);

const initialState = {
  isLoading: false,
  /** @type {null | InfoFromAPI} */
  info: null,
  errorMessage: '',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [getInfo.pending]: (state) => {
      state.isLoading = true;
      state.info = null;
      state.errorMessage = '';
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.info = payload;
      state.errorMessage = '';
    },
    [getInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.info = null;
      state.errorMessage = payload;
    },
  }
});

export { getInfo };
export const { reducer: infoReducer } = infoSlice;
