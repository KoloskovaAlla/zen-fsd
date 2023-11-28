import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').ClientsFromAPI} ClientsFromAPI
 */

/**
 * @function onGetClients
 * @param {null} _
 * @param {ThunkAPI}  thunkAPI
 * @returns Promise<ClientsFromAPI | string>
 */

const onGetClients = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const { theme } = state.themeReducer;
    const endpoint = lang;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.clients[theme]);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/** @type {*} */
const getClients = createAsyncThunk(
  'clients/getClients',
  onGetClients,
);

const initialState = {
  isLoading: false,
  clients: null,
  errorMessage: '',
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    [getClients.pending]: (state) => {
      state.isLoading = true;
      state.clients = null;
      state.errorMessage = '';
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.clients = payload;
      state.errorMessage = '';
    },
    [getClients.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.clients = null;
      state.errorMessage = payload;
    }
  }
});

export { getClients };
export const { reducer: clientsReducer } = clientsSlice;
