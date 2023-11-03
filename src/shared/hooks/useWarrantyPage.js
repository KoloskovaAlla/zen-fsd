import { useSelector } from 'react-redux';
import { getWarrantyPage } from '../reducers/warrantyPageSlice';

/**
 * @typedef {import('./types').WarrantyPageState} WarrantyPageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.warrantyPageReducer;

/**
 * @function useWarrantyPage
 * @returns {WarrantyPageState}
 */

export const useWarrantyPage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getState,
  };
};
