import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getClientsPage = createAsyncThunk(
  'clients/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState();
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/clients/.json`;

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
 * @typedef {import('./types').ClientsPageState} State
 * @type {State}
 */

const initialState = {
  isClientsPageLoading: false,
  clientsPage: null,
  clientsPageErrorMessage: '',
};

const clientsPageSlice = createSlice({
  name: 'clientsPage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getClientsPage.pending}`]: (state) => {
      state.isClientsPageLoading = true;
      state.clientsPage = null;
      state.clientsPageErrorMessage = '';
    },
    [`${getClientsPage.fulfilled}`]: (state, { payload }) => {
      state.isClientsPageLoading = false;
      state.clientsPage = payload;
      state.clientsPageErrorMessage = '';
    },
    [`${getClientsPage.rejected}`]: (state, { payload }) => {
      state.isClientsPageLoading = false;
      state.clientsPage = null;
      state.clientsPageErrorMessage = payload;
    },
  }
});

export { getClientsPage };
export const { reducer: clientsPageReducer } = clientsPageSlice;
