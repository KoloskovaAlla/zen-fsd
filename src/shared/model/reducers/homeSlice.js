import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const fetchHomePageData = createAsyncThunk(
  'homePage/fetchData', 
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer; 
    const url = `${API_BASE_URL}/${lang}/pages/homepage/.json`;

    try {
      const response = await fetch(url);
      const pageData = await response.json();
      if (!pageData) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(pageData);
    }
    catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

/** 
  * @typedef {import('./types').HomePageState} State         
  * @type {State}
*/

const initialState = {
  isLoading: false,
  homePageData: null,
  errorMessage: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  extraReducers: {
    [fetchHomePageData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHomePageData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.homePageData = payload;
      state.errorMessage = null;
    },
    [fetchHomePageData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.homePageData = null;
      state.errorMessage = payload;
    },
  }
});

export { fetchHomePageData };
export const { reducer: homePageReducer} =  homePageSlice;