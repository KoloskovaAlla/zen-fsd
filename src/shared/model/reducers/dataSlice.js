import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').DataState} State  
 */

const getData = createAsyncThunk(
  'app/getData',
  async (endPoint, thunkApi) => {
    const url = `${API_BASE_URL}/${endPoint}/.json`;

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

const initialState = {
  isLoading: false,
  data: null,
  errorMessage: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getData.pending}`]: (state) => {
      state.isLoading = true;
      state.data = null;
      state.errorMessage = '';
    },
    [`${getData.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = '';
    },
    [`${getData.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.data = null;
      state.errorMessage = payload;
    },
  }
});

export { getData };
export const { reducer: dataReducer } = dataSlice;
