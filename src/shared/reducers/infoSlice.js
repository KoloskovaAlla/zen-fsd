import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */

const getInfo = createAsyncThunk(
  'info/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langsReducer;
    const url = `${API_BASE_URL}/${lang}/info/.json`;

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
 * @typedef {import('./types').InfoState} State
 * @type {State}
 */

const initialState = {
  isLoading: false,
  info: null,
  errorMessage: '',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getInfo.pending}`]: (state) => {
      state.isLoading = true;
      state.info = null;
      state.errorMessage = '';
    },
    [`${getInfo.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.info = payload;
      state.errorMessage = '';
    },
    [`${getInfo.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.info = null;
      state.errorMessage = payload;
    },
  }
});

export { getInfo };
export const { reducer: infoReducer } = infoSlice;
