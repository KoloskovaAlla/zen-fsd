import { useEffect } from 'react';
import { sliderActions } from '../reducers/sliderSlice';
import { useSelector } from 'react-redux';

/**  
 * @returns {object}
 */

export const useSlider = () => {
  const {
    slides,
    sliderDescription,
  } = useSelector((state) => state.sliderReducer);

  useEffect(() => {
    localStorage.setItem('slides', JSON.stringify(slides));
    localStorage.setItem('sliderDescription', sliderDescription);
  }, [slides, sliderDescription]);

  return {
    sliderActions
  };
};
