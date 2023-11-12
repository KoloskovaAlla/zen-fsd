import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').NavFromAPI} NavFromAPI
 */

/**
 * @function onGetNav
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<NavFromAPI | string>}
 */

const onGetNav = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}`;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.navItems);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {*} */
const getNav = createAsyncThunk(
  'nav/getNav',
  onGetNav,
);

/**
  * @typedef {import('./types').NavItem} NavItem
  */

const initialState = {
  isLoading: false,
  /** @type {[] | NavItem[]} */
  navItems: [],
  errorMessage: '',
  isNavActive: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setIsNavActive: (state, { payload }) => {
      state.isNavActive = payload;
    },
  },
  extraReducers: {
    [getNav.pending]: (state) => {
      state.isLoading = true;
      state.navItems = [];
      state.errorMessage = '';
    },
    [getNav.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.navItems = payload;
      state.errorMessage = '';
    },
    [getNav.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.navItems = [];
      state.errorMessage = payload;
    },
  }
});

export { getNav };
export const { reducer: navReducer } = navSlice;
export const { setIsNavActive } = navSlice.actions;
