import { useSelector } from 'react-redux';
import { getCarePage } from '../reducers/carePageSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.carePageReducer;

// /** 
//  * @typedef {import('./types').CarePageState} State 
//  * @type {() => State}
//  */

export const useCarePage = () => {
  const carePageState = useSelector(getState);

  return {
    getCarePage,
    ...carePageState,
  };
};
