import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getLangs = createAsyncThunk(
  'languages/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/header/languages/.json`;

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
  * @typedef {import('./types').LangState} State
  * @type {State}
*/

const initialState = {
  isLoading: false,
  langs: [],
  errorMessage: '',
  lang: localStorage.getItem('lang') ?? 'en',
};

const langSlice = createSlice({
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
export const { reducer: langReducer } = langSlice;
export const { setLang } = langSlice.actions;
