import { useEffect } from 'react';
import { setPreviewDetails } from '../reducers/previewSlice';
import { useSelector } from 'react-redux';

/**
 * @typedef {import('./types').PreviewState} State
 * @type {(store: object) => object}
 */
const callback = (store) => { store.previewReducer }

/**  
 * @type {() => State}
 */

export const usePreview = () => {
  const { previewDetails } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('previewDetails', JSON.stringify(previewDetails));
  }, [previewDetails]);

  return {
    previewDetails,
    setPreviewDetails,
  };
};