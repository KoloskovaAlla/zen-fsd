import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getPostsPage = createAsyncThunk(
  'postsPage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langsReducer;
    const url = `${API_BASE_URL}/${lang}/pages/posts/.json`;

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
 * @typedef {import('./types').PostsPageState} State
 * @type {State}
 */

const initialState = {
  isPostsPageLoading: false,
  postsPage: null,
  postsPageErrorMessage: '',
};

const postsPageSlice = createSlice({
  name: 'postsPage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getPostsPage.pending}`]: (state) => {
      state.isPostsPageLoading = true;
      state.postsPage = null;
      state.postsPageErrorMessage = '';
    },
    [`${getPostsPage.fulfilled}`]: (state, { payload }) => {
      state.isPostsPageLoading = false;
      state.postsPage = payload;
      state.postsPageErrorMessage = '';
    },
    [`${getPostsPage.rejected}`]: (state, { payload }) => {
      state.isPostsPageLoading = false;
      state.postsPage = null;
      state.postsPageErrorMessage = payload;
    },
  }
});

export { getPostsPage };
export const { reducer: postsPageReducer } = postsPageSlice;
