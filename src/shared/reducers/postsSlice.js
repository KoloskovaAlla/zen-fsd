import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').PostsFromAPI} PostsFromAPI
 */

/**
 * @function onGetPosts
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns Promise<PostsFromAPI | string>
 */

const onGetPosts = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.sectionPosts);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {*} */
const getPosts = createAsyncThunk(
  'posts/getPosts',
  onGetPosts
);

const initialState = {
  isLoading: false,
  /** @type {null | PostsFromAPI} */
  postsSection: null,
  errorMessage: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
      state.postsSection = null;
      state.errorMessage = '';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postsSection = payload;
      state.errorMessage = '';
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.postsSection = null;
      state.errorMessage = payload;
    },
  }
});

export { getPosts };
export const { reducer: postsReducer } = postsSlice;
