import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { API_BASE_URL } from 'shared/constants/api';
import { setIsErrorMessage, setErrorMessage } from './errorModalSlice';
import { setDispatch } from 'shared/utils/setDispatch/setDispatch';
import { useError } from '../hooks/useError';

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
    useError(message);
    localStorage.setItem('errorMessage', message);
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
  post: null,
  postErrorMessage: '',
  isErrorMessagePost: false,
  errorMessagePost: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setIsErrorMessagePost: (state, { payload }) => {
      state.isErrorMessagePost = payload;
    },
    setErrorMessagePost: (state, { payload }) => {
      state.errorMessagePost = payload;
    },
  },
  extraReducers: {
    [`${getPost.pending}`]: (state) => {
      state.isPostLoading = true;
      state.post = null;
      state.postErrorMessage = '';
    },
    [`${getPost.fulfilled}`]: (state, { payload }) => {
      state.isPostLoading = false;
      state.post = payload;
      state.postErrorMessage = '';
    },
    [`${getPost.rejected}`]: (state, { payload }) => {
      state.isPostLoading = false;
      state.post = null;
      state.postErrorMessage = payload;
    },
  }
});

export { getPost };
export const { reducer: postReducer } = postSlice;
export const { setErrorMessagePost } = postSlice.actions;
