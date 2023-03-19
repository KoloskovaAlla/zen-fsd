import { useSelector } from 'react-redux';
import { fetchHomePageData } from '../reducers/homeSlice';

/**  
 * @returns {object}
 */

export const useHomePage = () => {
  const {
    isLoading,
    homePageData,
    errorMessage
  } = useSelector((state) => state.homePageReducer);

  return {
    fetchHomePageData,
    isLoading,
    homePageData,
    errorMessage,
  };
};
