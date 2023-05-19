import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  data: null,
  errorMessage: null,
};

// @ts-ignore
const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
      state.data = null;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.errorMessage = null;
    },
    [getData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.data = null;
      state.errorMessage = payload;
    },
  }
});

export { getData };
export const { reducer: dataReducer } = dataSlice;
