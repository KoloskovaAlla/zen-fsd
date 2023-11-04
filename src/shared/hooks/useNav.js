import { useSelector } from 'react-redux';
import { getNav, setIsNavActive } from '../reducers/navSlice';

/**
 * @typedef {import('./types').NavState} NavState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.navReducer;

/**
 * @function useNav
 * @returns {NavState}
 */

export const useNav = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getNav,
    setIsNavActive,
  };
};
