import { useSelector } from 'react-redux';
import { fetchPostsData } from '../reducers/postsSlice'

/**  
 * @returns {object}
 */

export const usePosts = () => {
  const {
    isLoading,
    postsData,
    errorMessage
  } = useSelector((state) => state.homePageReducer);

  return {
    fetchPostsData,
    isLoading,
    postsData,
    errorMessage,
  };
};



