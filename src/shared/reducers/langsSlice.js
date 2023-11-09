import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkApi} ThunkApi
 */

/**
 * @function onGetLangs
 * @param {*} _
 * @param {ThunkApi} thunkApi
 * @returns {Promise<Object | string>}
 */

const onGetLangs = async (_, thunkApi) => {
  const /** @type {*} */ state = thunkApi.getState();
  const { lang } = state.langsReducer;
  const endpoint = `${lang}/header/languages`;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const isDataEmpty = !Object.values(data).length;
    if (isDataEmpty) throw new Error('Data is empty');
    return thunkApi.fulfillWithValue(data);
  } catch (error) {
    console.error(error);
    const /** @type {*} */ { message } = error;
    return thunkApi.rejectWithValue(message);
  };
};

/**  @type {*} */
const getLangs = createAsyncThunk(
  'langs/getLangs',
  onGetLangs,
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
