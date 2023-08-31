import { useSelector } from 'react-redux';
import { getCashback } from '../reducers/cashbackSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.cashbackReducer;

/** 
 * @typedef {import('./types').CashbackState} State 
 * @type {() => State}
 */

export const useCashback = () => {
  const {
    isLoading,
    cashback,
    errorMessage,
  } = useSelector(callback);

  return {
    getCashback,
    isLoading,
    cashback,
    errorMessage,
  };
};
