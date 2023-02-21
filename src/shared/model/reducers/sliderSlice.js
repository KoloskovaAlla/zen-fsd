import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slides: [],
  sliderDescription: null
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSlides: (state, action) => {
      state.slides = [...state.slides, action.payload];
    },
    setSliderDescription: (state, { payload }) => {
      state.sliderDescription = payload;
    },
  },
});

export const { reducer: sliderReducer } = sliderSlice;
export const sliderActions = sliderSlice.actions;

