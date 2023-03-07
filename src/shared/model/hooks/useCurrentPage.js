import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../reducers/pageSlice'

/**  
 * @returns {object}
 */

export const useCurrentPage = () => {
  const { currentPage } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
  };
};