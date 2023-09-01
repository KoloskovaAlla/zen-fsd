import { useSelector } from 'react-redux';
import { getCashback } from '../reducers/cashbackSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.cashbackReducer;

/** 
 * @typedef {import('./types').CashbackData} State 
 * @type {() => State}
 */

export const useCashback = () => {
  const cashbackState = useSelector(getState);

  return {
    getCashback,
    ...cashbackState,
  };
};
