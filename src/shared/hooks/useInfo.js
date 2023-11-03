import { useSelector } from 'react-redux';
import { getInfo } from '../reducers/infoSlice';

/**
 * @typedef {import('./types').InfoState} InfoState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.infoReducer;

/**
 * @function useInfo
 * @returns {InfoState}
 */

export const useInfo = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getInfo,
  };
};
