import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getPost = createAsyncThunk(
  'post/getData',
  async (key, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/sectionPosts/posts/${key}/.json`; 

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!Object.values(data).length) throw new Error('Data is empty');
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

/**
 * @typedef {import('./types').PostState} State 
 * @type {State} 
 */

const initialState = {
  isPostLoading: false,
  post: null,
  postErrorMessage: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
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
