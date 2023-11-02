import { useSelector } from 'react-redux';
import { getCashbackPage } from '../reducers/cashbackPageSlice';

/**
 * @typedef {import('./types').CashbackPageState} CashbackPageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.cashbackPageReducer;

/**
 * @function useCashbackPage
 * @returns
 */

export const useCashbackPage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getCashbackPage,
  };
};
