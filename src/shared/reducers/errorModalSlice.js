import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/**
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 * @typedef {import('./types').ErrorMessageFromAPI} FromAPI
 */

/**
 * @function onGet
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<FromAPI | string>}
 */

const onGetErrorModal = async (_, thunkAPI) => {
  try {
    const /** @type {*} */ state = thunkAPI.getState();
    const { lang } = state.langsReducer;
    const endpoint = `${lang}`;
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.langs);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    // showModal(message);
    return thunkAPI.rejectWithValue(message);
  };
};

/**  @type {*} */
const getErrorModal = createAsyncThunk(
  'errorModal/getErrorModal',
  onGetErrorModal,
);

/**
 * @typedef {import('./types').Lang} Lang
 */

const initialState = {
  isErrorMrssage: false,
  errorMessage: '',
};

const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState,
  reducers: {
    setErrorModal: (state, { payload }) => {
      state.isErrorMrssage = payload;
    },
  },
  // extraReducers: {
  //   [getLangs.pending]: (state) => {
  //     state.isLangsLoading = true;
  //     state.langs = [];
  //     state.langsErrorMessage = '';
  //   },
  //   [getLangs.fulfilled]: (state, { payload }) => {
  //     state.isLangsLoading = false;
  //     state.langs = payload;
  //     state.langsErrorMessage = '';
  //   },
  //   [getLangs.rejected]: (state, { payload }) => {
  //     state.isLangsLoading = false;
  //     state.langs = [];
  //     state.langsErrorMessage = payload;
  //   },
  // }
});

export { getErrorModal };
export const { reducer: errorModalReducer } = errorModalSlice;
export const { setErrorModal } = errorModalSlice.actions;
