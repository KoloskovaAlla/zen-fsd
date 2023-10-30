import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const fetchPostsData = createAsyncThunk(
  'posts/fetchData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
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
    [`${fetchPostsData.pending}`]: (state) => {
      state.isLoading = true;
      state.postsData = null;
      state.errorMessage = '';
    },
    [`${fetchPostsData.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = payload;
      state.errorMessage = '';
    },
    [`${fetchPostsData.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = null;
      state.errorMessage = payload;
    },
  }
});

export { fetchPostsData };
export const { reducer: postsReducer } = postsSlice;
