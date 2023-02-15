import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previewDetails: null,
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewDetails: (state, { payload }) => {
      state.previewDetails = payload;
    },
  },
});

export const { reducer: previewReducer } = previewSlice;
export const { setPreviewDetails } = previewSlice.actions;