import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').LangsFromAPI} LangsFromAPI
 */

/**
 * @function onGetLangs
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<LangsFromAPI | string>}
 */

const onGetLangs = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}`;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    // showNotice('success');
    return thunkAPI.fulfillWithValue(data.langs);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    // showModal(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/**  @type {*} */
const getLangs = createAsyncThunk(
  'langs/getLangs',
  onGetLangs,
);

/**
 * @typedef {import('./types').Lang} Lang
 */

const initialState = {
  isLangsLoading: false,
  /** @type {[] | Lang[]} */
  langs: [],
  langsErrorMessage: '',
  lang: localStorage.getItem('lang') ?? 'en',
};

const langsSlice = createSlice({
  name: 'langs',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
  extraReducers: {
    [getLangs.pending]: (state) => {
      state.isLangsLoading = true;
      state.langs = [];
      state.langsErrorMessage = '';
    },
    [getLangs.fulfilled]: (state, { payload }) => {
      state.isLangsLoading = false;
      state.langs = payload;
      state.langsErrorMessage = '';
    },
    [getLangs.rejected]: (state, { payload }) => {
      state.isLangsLoading = false;
      state.langs = [];
      state.langsErrorMessage = payload;
    },
  }
});

export { getLangs };
export const { reducer: langsReducer } = langsSlice;
export const { setLang } = langsSlice.actions;
