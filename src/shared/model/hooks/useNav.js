import { useSelector } from 'react-redux';
import { getNav, setIsNavActive } from '../reducers/navSlice';

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
    errorMessage,
    isNavActive
  } = useSelector(callback);        

  return {
    getNav,
    isLoading,
    navItems,
    errorMessage,
    setIsNavActive,
    isNavActive,
  };
};
