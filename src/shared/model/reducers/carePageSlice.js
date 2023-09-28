import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

/** @type {any} */
const getCarePage = createAsyncThunk(
  'сarePage/getData',
  async (_, thunkApi) => {
    /**  @type {*} */
    const state = thunkApi.getState()
    const { lang } = state.langReducer;
    const url = `${API_BASE_URL}/${lang}/pages/care/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!Object.values(data).length) throw new Error('Data is empty');
      return thunkApi.fulfillWithValue(data);
    }
    catch (error) {
      console.error(error);
      /** @type {*} */
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  isCarePageLoading: false,
  carePage: null,
  carePageErrorMessage: '',
};

const carePageSlice = createSlice({
  name: 'carePage',
  initialState,
  reducers: {},
  extraReducers: {
    [`${getCarePage.pending}`]: (state) => {
      state.isCarePageLoading = true;
      state.carePage = null;
      state.carePageErrorMessage = '';
    },
    [`${getCarePage.fulfilled}`]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.carePage = payload;
      state.carePageErrorMessage = '';
    },
    [`${getCarePage.rejected}`]: (state, { payload }) => {
      state.isCarePageLoading = false;
      state.carePage = null;
      state.carePageErrorMessage = payload;
    },
  }
});

export { getCarePage };
export const { reducer: carePageReducer } = carePageSlice;
