import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../reducers/currentPageSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.currentPageReducer;

/**  
 * @typedef {import('./types').CurrentPageState} State
 * @type {() => State}
 */
export const useCurrentPage = () => {
  const { currentPage } = useSelector(callback);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
  };
};