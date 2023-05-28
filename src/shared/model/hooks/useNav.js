import { useSelector } from 'react-redux';
import { getNav } from '../reducers/navSlice';


/** @type {(store: object) => object} */
const callback = (store) => store.navReducer;

/** 
 * @typedef {import('./types').NavState} State 
 * @type {() => State}
*/

export const useNav = () => {
  const {
    isLoading,
    navItems,
    errorMessage
  } = useSelector(callback);    

  return {
    getNav,
    isLoading,
    navItems,
    errorMessage,
  };
};
