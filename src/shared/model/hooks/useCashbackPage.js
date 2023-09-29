import { useSelector } from 'react-redux';
import { getCashbackPage } from '../reducers/cashbackPageSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.cashbackPageReducer;

/** 
 * @typedef {import('./types').CashbackPageState} State 
 * @type {() => State}
 */

export const useCashbackPage = () => {
  const carePageState = useSelector(getState);

  return {
    getCashbackPage,
    ...carePageState,
  };
};
