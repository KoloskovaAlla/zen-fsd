import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').ColumnFromAPI} ColumnFromAPI
 */

/**
 * @function onGetColumns
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns Promise<ColumnFromAPI[] | string>
 */

const onGetColumns = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.columns);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {*} */
const getColumns = createAsyncThunk(
  'columns/getColumns',
  onGetColumns,
);

const initialState = {
  isLoading: false,
  /** @type {[] | ColumnFromAPI[]} */
  columns: [],
  errorMessage: '',
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: {
    [getColumns.pending]: (state) => {
      state.isLoading = true;
      state.columns = [];
      state.errorMessage = '';
    },
    [getColumns.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.columns = payload;
      state.errorMessage = '';
    },
    [getColumns.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.columns = [];
      state.errorMessage = payload;
    },
  }
});

export { getColumns };
export const { reducer: columnsReducer } = columnsSlice;
