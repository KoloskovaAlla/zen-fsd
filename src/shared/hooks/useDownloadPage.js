import { useSelector } from 'react-redux';
import { getDownloadPage } from '../reducers/downloadPageSlice';

/**
 * @typedef {import('./types').DownloadPageState} DownloadPageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.downloadPageReducer;

/**
 * @function useDownloadPage
 * @returns {DownloadPageState}
 */

export const useDownloadPage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getDownloadPage,
  };
};

