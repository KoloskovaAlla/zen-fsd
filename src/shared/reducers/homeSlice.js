import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const getHomePage = createAsyncThunk(
  'homePage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/homepage/.json`;

    try {
      const response = await fetch(url);
      const pageData = await response.json();
      if (!Object.values(pageData).length) throw new Error('Data is empty');
      return thunkApi.fulfillWithValue(pageData);
    } catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

/**
  * @typedef {import('./types').HomePageState} State
  * @type {State}
  */

const initialState = {
  isLoading: false,
  homePage: null,
  errorMessage: '',
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getHomePage.pending}`]: (state) => {
      state.isLoading = true;
      state.homePage = null;
      state.errorMessage = '';
    },
    [`${getHomePage.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.homePage = payload;
      state.errorMessage = '';
    },
    [`${getHomePage.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.homePage = null;
      state.errorMessage = payload;
    },
  }
});

export { getHomePage };
export const { reducer: homePageReducer } = homePageSlice;
