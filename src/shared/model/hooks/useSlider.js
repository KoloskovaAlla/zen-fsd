import { useEffect } from 'react';
import { sliderActions } from '../reducers/sliderSlice';
import { useSelector } from 'react-redux';

/**
 * @type {(store: object) => object} 
 */
const callback = (store) => store.sliderReducer; 

/**
 * @typedef {import('./types').SliderState} State
 * @type {() => {State}} 
 */
export const useSlider = () => {
  const {
    slides,
    sliderDescription,
  } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('slides', JSON.stringify(slides));
    localStorage.setItem('sliderDescription', sliderDescription);
  }, [slides, sliderDescription]);

  return {
    slides, 
    sliderDescription,
  };
};
