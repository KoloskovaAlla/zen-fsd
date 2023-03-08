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
  } = useSelector((state) => state.postsReducer);

  return {
    fetchPostsData,
    isLoading,
    postsData,
    errorMessage,
  };
};



