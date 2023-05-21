import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const fetchHeaderData = createAsyncThunk(
  'header/fetchData',
  async (lang, thunkApi) => {

    const url = `${API_BASE_URL}/${lang}/header/.json`;

    try {
      const response = await fetch(url);
      const headerData = await response.json();
      if (!headerData) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(headerData);
    }
    catch (error) {
      /** @type {*} */
      const { message } = error;
      console.error(message);
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  headerData: null,
  errorMessage: null,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {},
  extraReducers: {
    [`${fetchHeaderData.pending}`]: (state) => {
      state.isLoading = true;
      state.headerData = null;
      state.errorMessage = null;
    },
    [`${fetchHeaderData.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.headerData = payload;
      state.errorMessage = null;
    },
    [`${fetchHeaderData.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.headerData = null;
      state.errorMessage = payload;
    },
  }
});

export { fetchHeaderData };
export const { reducer: headerReducer } = headerSlice;
