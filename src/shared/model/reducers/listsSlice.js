import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getLists = createAsyncThunk(
  'lists/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/lists/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) throw new Error('Failed to fetch');
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
  * @typedef {import('../schema/types').ListsState} State         
  * @type {State}
*/

const initialState = {
  isLoading: false,
  lists: [],
  errorMessage: '',
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getLists.pending}`]: (state) => {
      state.isLoading = true;
      state.lists = [];
      state.errorMessage = '';
    },
    [`${getLists.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.lists = payload;
      state.errorMessage = '';
    },
    [`${getLists.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.lists = [];
      state.errorMessage = payload;
    },
  }
});

export { getLists };
export const { reducer: listsReducer } = listsSlice;
