import { useEffect } from 'react';
import { sliderActions } from '../reducers/sliderSlice';
import { useSelector } from 'react-redux';

export const useSlider = () => {
  const { slides, sliderDescription } = useSelector((state) => state.sliderReducer);

  useEffect(() => {
    localStorage.setItem('slides', slides);
    localStorage.setItem('sliderDescription', sliderDescription);
  }, [slides, sliderDescription]);

  return {
    sliderActions
  };
};