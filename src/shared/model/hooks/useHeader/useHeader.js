import { useSelector } from 'react-redux';
import { getData } from 'shared/model/reducers/dataSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.dataReducer;

/** 
 * @typedef {import('./types').HeaderState} State 
 * @type {() => State}
*/

export const useHeader = () => {
  const {
    isLoading,
    data: headerData,
    errorMessage
  } = useSelector(callback);

  return {
    getData,
    isLoading,
    headerData,
    errorMessage,
  };
};
