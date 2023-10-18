import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const fetchClientsData = createAsyncThunk(
  'clients/fetchData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const { theme } = state.themeReducer;
    const url = `${API_BASE_URL}/${lang}/clients/${theme}/.json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!Object.values(data).length) throw new Error('Data is empty');
      return thunkApi.fulfillWithValue(data);
    } catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

/**
 * @typedef {import('./types').ClientsState} State
 * @type {State}
 */

const initialState = {
  isLoading: false,
  clientsData: null,
  errorMessage: '',
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchClientsData.pending]: (state) => {
      state.isLoading = true;
      state.clientsData = null;
      state.errorMessage = '';
    },
    [fetchClientsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.clientsData = payload;
      state.errorMessage = '';
    },
    [fetchClientsData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.clientsData = null;
      state.errorMessage = payload;
    }
  }
});

export { fetchClientsData };
export const { reducer: clientsReducer } = clientsSlice;