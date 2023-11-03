import { useSelector } from 'react-redux';
import { getHomePage } from '../reducers/homeSlice';

/**
 * @typedef {import('./types').HomePageState} HomePageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.homePageReducer;

/**
 * @function useHomePage
 * @returns HomePageState
 */

export const useHomePage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getHomePage,
  };
};
