import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previewDetails: null,
  isDarkClicked: false,
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewDetails: (state, {payload}) => {state.previewDetails = payload},
    setIsDarkClicked: (state, {payload}) => {state.isDarkClicked = payload},
  },
});

export const { reducer: previewReducer } = previewSlice;
export const { setPreviewDetails, setIsDarkClicked } = previewSlice.actions;