import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();


  let getNav = () => { };

  useEffect(() => {
    // @ts-ignore
    dispatch(getData(endPoint));
    getNav = () => {
      // @ts-ignore
      dispatch(getData(endPoint));
    };
  }, [])

  return {
    getNav,
    isLoading,
    navItems,
    errorMessage,
  };
};
