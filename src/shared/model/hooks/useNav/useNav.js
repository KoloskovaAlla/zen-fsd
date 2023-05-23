import { useSelector } from 'react-redux';
import { getData } from '../../reducers/dataSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.dataReducer;

/** 
 * @typedef {import('./types').NavState} State 
 * @type {() => State}
*/

export const useNav = () => {
  const {
    isLoading,
    data: navItems,
    errorMessage
  } = useSelector(callback);

  return {
    getData,
    isLoading,
    navItems,
    errorMessage,
  };
};
