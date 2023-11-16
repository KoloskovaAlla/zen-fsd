import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').HomePageFromAPI} HomePageFromAPI
 */

/**
 * @function onGetHomePage
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<HomePageFromAPI | string>}
 */

const onGetHomePage = async (_, thunkAPI) => {
  const /** @type {*} */ state = thunkAPI.getState();
  const { lang } = state.langsReducer;
  const endpoint = `${lang}`;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.homePage);
  } catch (error) {
    console.error(error);
    const /** @type {*} */ { message } = error;
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {*} */
const getHomePage = createAsyncThunk(
  'homePage/getHomePage',
  onGetHomePage,
);

const initialState = {
  isLoading: false,
  /** @type {null | HomePageFromAPI} */
  homePage: null,
  errorMessage: '',
};

/** @type {*} */
const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers: {
    [getHomePage.pending]: (state) => {
      state.isLoading = true;
      state.homePage = null;
      state.errorMessage = '';
    },
    [getHomePage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.homePage = payload;
      state.errorMessage = '';
    },
    [getHomePage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.homePage = null;
      state.errorMessage = payload;
    },
  }
});

export { getHomePage };
export const { reducer: homePageReducer } = homePageSlice;
