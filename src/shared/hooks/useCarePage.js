import { useSelector } from 'react-redux';
import { getCarePage } from '../reducers/carePageSlice';

/**
 * @typedef {import('./types').CarePageState} CarePageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.carePageReducer;

/**
 * @function useCarePage
 * @returns {CarePageState}
 */

export const useCarePage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getCarePage,
  };
};
