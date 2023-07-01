import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').SliderState} State
 * @type {State}
 */
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
export const setSlides = sliderSlice.actions;

