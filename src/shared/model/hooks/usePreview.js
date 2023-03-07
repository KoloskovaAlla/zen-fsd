import { useEffect } from 'react';
import { setPreviewDetails } from '../reducers/previewSlice';
import { useSelector } from 'react-redux';

/**  
 * @returns {object}
 */

export const usePreview = () => {
  const { previewDetails } = useSelector((state) => state.previewReducer);

  useEffect(() => {
    localStorage.setItem('previewDetails', JSON).stringify(previewDetails);
  }, [previewDetails]);

  return {
    previewDetails,
    setPreviewDetails,
  };
};