import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').PostsPageFromAPI} PostsPageFromAPI
 */

/**
 * @function onGetPostsPage
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<PostsPageFromAPI | string>}
 */

const onGetPostsPage = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.postsPage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {any} */
const getPostsPage = createAsyncThunk(
  'postsPage/getPostsPage',
  onGetPostsPage,
);

const initialState = {
  isPostsPageLoading: false,
  /** @type {null | PostsPageFromAPI} */
  postsPage: null,
  postsPageErrorMessage: '',
};

const postsPageSlice = createSlice({
  name: 'postsPage',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsPage.pending]: (state) => {
      state.isPostsPageLoading = true;
      state.postsPage = null;
      state.postsPageErrorMessage = '';
    },
    [getPostsPage.fulfilled]: (state, { payload }) => {
      state.isPostsPageLoading = false;
      state.postsPage = payload;
      state.postsPageErrorMessage = '';
    },
    [getPostsPage.rejected]: (state, { payload }) => {
      state.isPostsPageLoading = false;
      state.postsPage = null;
      state.postsPageErrorMessage = payload;
    },
  }
});

export { getPostsPage };
export const { reducer: postsPageReducer } = postsPageSlice;
