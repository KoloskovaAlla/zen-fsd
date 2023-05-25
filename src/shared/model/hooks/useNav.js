import { useSelector } from 'react-redux';
import { getData } from '../reducers/dataSlice';
import { useEffect } from 'react';

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

  const endPoint = 'header/menuItems';
  // @ts-ignore
  const getNav = () => { getData(endPoint); };

  useEffect(() => {
    console.log(`navItems: ${navItems}`)
  }, [])

  return {
    getNav,
    isLoading,
    navItems,
    errorMessage,
  };
};
