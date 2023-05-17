import { useSelector } from 'react-redux';
import { fetchHeaderData } from 'shared/model/reducers/headerSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.headerReducer;

/** 
 * @typedef {import('./types').HeaderState} State 
 * @type {() => State}
*/

export const useHeader = () => {
  const {
    isLoading,
    headerData,
    errorMessage
  } = useSelector(callback);

  return {
    fetchHeaderData,
    isLoading,
    headerData,
    errorMessage,
  };
};
