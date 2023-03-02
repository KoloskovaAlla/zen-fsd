import { useEffect } from 'react';
import { setPreviewDetails } from '../reducers/previewSlice';
import { useSelector } from 'react-redux';

export const usePreview = () => {
  const { previewDetails } = useSelector((state) => state.previewReducer);

  useEffect(() => {
    localStorage.setItem('previewDetails', previewDetails);
  }, [previewDetails]);

  return {
    setPreviewDetails
  };
};