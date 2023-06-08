import { useSelector } from 'react-redux';
import { getInfo } from '../reducers/infoSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.infoReducer;

/** 
 * @typedef {import('../schema/types').InfoState} State 
 * @type {() => State}
*/

export const useInfo= () => {
  const {
    isLoading,
    info,
    errorMessage,   
  } = useSelector(callback); 

  return {
    getInfo,
    isLoading,
    info,
    errorMessage,    
  };
};
