import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').CarePageFromAPI} CarePageFromAPI
 */

/**
 * @function onGetCarePage
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<CarePageFromAPI | string>}
 */

const onGetCarePage = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}`;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.carePage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {*} */
const getCarePage = createAsyncThunk(
  'сarePage/getCarePage',
  onGetCarePage,
);

const initialState = {
  isCarePageLoading: false,
  /** @type {null | CarePageFromAPI} */
  carePage: null,
  carePageErrorMessage: '',
};

const carePageSlice = createSlice({
  name: 'carePage',
  initialState,
  reducers: {},
  extraReducers: {
    [getCarePage.pending]: (state) => {
      state.isCarePageLoading = true;
      state.carePage = null;
      state.carePageErrorMessage = '';
    },
    [getCarePage.fulfilled]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.carePage = payload;
      state.carePageErrorMessage = '';
    },
    [getCarePage.rejected]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.carePage = null;
      state.carePageErrorMessage = payload;
    },
  }
});

export { getCarePage };
export const { reducer: carePageReducer } = carePageSlice;
