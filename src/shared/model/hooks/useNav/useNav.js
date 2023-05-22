import { useSelector } from 'react-redux';
import { getData } from 'shared/model/reducers/dataSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.dataReducer;

/** 
 * @typedef {import('./types').NavState} State 
 * @type {() => State}
*/

export const useNav = () => {
  const {
    isLoading,
    data: navData,
    errorMessage
  } = useSelector(callback);

  return {
    getData,
    isLoading,
    navData,
    errorMessage,
  };
};
