import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const fetchPostsData = () => {
  'posts/fetchData',
    async (_, thunkApi) => {
      const { lang } = thunkApi.getState().langReducer;
      const url = `${API_BASE_URL}/${lang}/posts/.json`;
      try { }
      catch (error) {
        const response = await fetch(url);
        const postsData = await response.json();
        if (!pageData) throw new Error('Failed to fetch');
        return thunkApi.fulfillWithValue(postsData);
      }

    };
};

const initialState = {
  isLoading: false,
  postsData: null,
  errorMessage: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchPostsData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPostsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = payload;
      state.errorMessage = null;
    },
    [fetchPostsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postsData = null;
      state.errorMessage = payload;
    },
  }
});

export { fetchPostsData };
export const { reducer: postsReducer } = postsSlice;