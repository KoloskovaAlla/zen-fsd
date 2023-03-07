import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const fetchClientsData = createAsyncThunk(
  'posts/fetchData',
  async (_, thunkApi) => {
    const { lang } = thunkApi.getState().langReducer;
    const url = `${API_BASE_URL}/${lang}/clients/.json`;
    try {
      const response = await fetch(url);
      const clientsData = await response.json();
      if (!clientsData) throw new Error('Failed to fetch');
      return thunkApi.fulfillWithValue(clientsData);
    }
    catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  clientsData: null,
  errorMessage: null,
}

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  extraReducers: {
    [fetchClientsData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchClientsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.clientsData = payload;
      state.errorMessage = null;
    },
    [fetchClientsData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.homePageData = null;
      state.errorMessage = payload;
    }
  }
});

export { fetchClientsData }
export const { reducer: clientsReducer } = clientsSlice;