import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getLang = createAsyncThunk(
  'languages/getData',
  async (_, thunkApi) => {
    /**  @type {*} */   
    const state = thunkApi.getState()  
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/header/languages/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(data);
    }
    catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  languages: [],
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
    [`${getLang.pending}`]: (state) => {
      state.isLoading = true;
      state.languages = [];
      state.errorMessage = '';
    },
    [`${getLang.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.languages = payload;
      state.errorMessage = '';
    },
    [`${getLang.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.languages = [];
      state.errorMessage = payload;
    },
  }
});

export { getLang };
export const { reducer: langReducer } = langSlice;
export const { setLang } = langSlice.actions;
