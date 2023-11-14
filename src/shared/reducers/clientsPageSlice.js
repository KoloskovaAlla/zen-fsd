import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').ClientsPageFromAPI} ClientsPageFromAPI
 */

/**
 * 
 * @param {null} _ 
 * @param {ThunkAPI} thunkAPI 
 * @returns {Promise<ClientsPageFromAPI | string>}
 */

const onGetClientsPage = async (_, thunkAPI) => {
  const /** @type {*} */ state = thunkAPI.getState();
  const { lang } = state.langsReducer;
  const endpoint = `${lang}`;
  const url = `${API_BASE_URL}/${endpoint}/.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.clientsPage);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {*} */
const getClientsPage = createAsyncThunk(
  'clientsPage/getClientsPage',
  onGetClientsPage,
);

const initialState = {
  isClientsPageLoading: false,
  /** @type {null | ClientsPageFromAPI} */
  clientsPage: null,
  clientsPageErrorMessage: '',
};

const clientsPageSlice = createSlice({
  name: 'clientsPage',
  initialState,
  reducers: {},
  extraReducers: {
    [getClientsPage.pending]: (state) => {
      state.isClientsPageLoading = true;
      state.clientsPage = null;
      state.clientsPageErrorMessage = '';
    },
    [getClientsPage.fulfilled]: (state, { payload }) => {
      state.isClientsPageLoading = false;
      state.clientsPage = payload;
      state.clientsPageErrorMessage = '';
    },
    [getClientsPage.rejected]: (state, { payload }) => {
      state.isClientsPageLoading = false;
      state.clientsPage = null;
      state.clientsPageErrorMessage = payload;
    },
  }
});

export { getClientsPage };
export const { reducer: clientsPageReducer } = clientsPageSlice;
