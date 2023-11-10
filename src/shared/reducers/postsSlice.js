import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const getPosts = createAsyncThunk(
  'posts/fetchData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langsReducer;
    const url = `${API_BASE_URL}/${lang}/sectionPosts/.json`;

    try {
      const response = await fetch(url);
      const postsData = await response.json();
      if (!Object.values(postsData).length) throw new Error('Data is empty');
      return thunkApi.fulfillWithValue(postsData);
    } catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

/**
 * @typedef {import('./types').PostsState} State
 * @type {State}
 */

const initialState = {
  isLoading: false,
  postsData: null,
  errorMessage: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getPosts.pending}`]: (state) => {
      state.isLoading = true;
      state.postsData = null;
      state.errorMessage = '';
    },
    [`${getPosts.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = payload;
      state.errorMessage = '';
    },
    [`${getPosts.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = null;
      state.errorMessage = payload;
    },
  }
});

export { getPosts };
export const { reducer: postsReducer } = postsSlice;
