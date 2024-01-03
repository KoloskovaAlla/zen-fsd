import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').PostFromAPI} PostFromAPI
 */

/**
 * @function onGetPost
 * @param {string} key
 * @param {ThunkAPI} thunkAPI
 * @throws {Error} If there is no such post
 * @returns {Promise<PostFromAPI | string>}
 */

const onGetPost = async (key, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}/posts/${key}`;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (!data) throw new Error('There is no such post');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {any} */
const getPost = createAsyncThunk(
  'post/getPost',
  onGetPost,
);

const initialState = {
  isPostLoading: false,
  /** @type {null | PostFromAPI} */
  post: null,
  postErrorMessage: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetPostErrorMessage: (state) => {
      state.postErrorMessage = '';
    },
    clearPostPage: (state) => {
      state.post = null;
    },
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.isPostLoading = true;
      state.post = null;
      state.postErrorMessage = '';
      console.log('Dispatching getPost.pending');
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.isPostLoading = false;
      state.post = payload;
      state.postErrorMessage = '';
      console.log('Dispatching getPost.fulfilled');
    },
    [getPost.rejected]: (state, { payload }) => {
      state.isPostLoading = false;
      state.post = null;
      state.postErrorMessage = payload;
      console.log('Dispatching getPost.rejected');
    },
  }
});

export { getPost };
export const { reducer: postReducer } = postSlice;
export const { resetPostErrorMessage, clearPostPage } = postSlice.actions;
