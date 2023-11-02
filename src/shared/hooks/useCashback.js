import { useSelector } from 'react-redux';
import { getCashback } from '../reducers/cashbackSlice';

/**
 * @typedef {import('./types').CashbackState} CashbackState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.cashbackReducer;

/**
 * @functions useCashback
 * @returns {CashbackState}
 */

export const useCashback = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getCashback,
  };
};
