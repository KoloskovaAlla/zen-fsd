import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getColumns = createAsyncThunk(
  'lists/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/columns/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) throw new Error('Failed to fetch');
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
  * @typedef {import('./types').ColumnsState} State
  * @type {State}
*/

const initialState = {
  isLoading: false,
  columns: [],
  errorMessage: '',
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getColumns.pending}`]: (state) => {
      state.isLoading = true;
      state.columns = [];
      state.errorMessage = '';
    },
    [`${getColumns.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.columns = payload;
      state.errorMessage = '';
    },
    [`${getColumns.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.columns = [];
      state.errorMessage = payload;
    },
  }
});

export { getColumns };
export const { reducer: columnsReducer } = columnsSlice;
