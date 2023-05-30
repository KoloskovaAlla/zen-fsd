import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';

const getNav = createAsyncThunk(
  'navigation/getData',
  async (_, thunkApi) => {
    // @ts-ignore    
    const { lang } = thunkApi.getState().langReducer;
    const url = `${API_BASE_URL}/${lang}/header/menuItems/.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data) throw new Error('Failed to fetch');
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
  isLoading: false,
  navItems: null,
  errorMessage: '',
  isNavActive: false,
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setIsNavActive: (state, { payload }) => {
      state.isNavActive = payload;
    },
  },
  extraReducers: {
    [`${getNav.pending}`]: (state) => {
      state.isLoading = true;
      state.navItems = null;
      state.errorMessage = '';
    },
    [`${getNav.fulfilled}`]: (state, { payload }) => {
      state.isLoading = false;
      state.navItems = payload;
      state.errorMessage = '';
    },
    [`${getNav.rejected}`]: (state, { payload }) => {
      state.isLoading = false;
      state.navItems = null;
      state.errorMessage = payload;
    },
  }
});

export { getNav };
export const { reducer: navReducer } = navSlice;
export const { setIsNavActive } = navSlice.actions;