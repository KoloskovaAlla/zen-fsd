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
    return thunkAPI.fulfillWithValue(data.langs);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/**  @type {*} */
const getLangs = createAsyncThunk(
  'langs/getLangs',
  onGetLangs,
);

/**
  * @typedef {import('./types').LangsState} State
  * @type {State}
*/

const initialState = {
  isLoading: false,
  langs: [],
  errorMessage: '',
  lang: localStorage.getItem('lang') ?? 'en',
};

const langsSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
  extraReducers: {
    [`${getLangs.pending}`]: (state) => {
      state.isLoading = true;
      state.langs = [];
      state.errorMessage = '';
    },
    [`${getLangs.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.langs = payload;
      state.errorMessage = '';
    },
    [`${getLangs.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.langs = [];
      state.errorMessage = payload;
    },
  }
});

export { getLangs };
export const { reducer: langsReducer } = langsSlice;
export const { setLang } = langsSlice.actions;