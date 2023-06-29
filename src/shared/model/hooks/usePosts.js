import { useSelector } from 'react-redux';
import { fetchPostsData } from '../reducers/postsSlice'

/** @type {(store: object) => object} */
const callback = (store) => store.postsReducer

/**  
 * @typedef {import('./types').PostsState} State
 * @type {() => State}
 */

export const usePosts = () => {
  const {
    isLoading,
    postsData,
    errorMessage
  } = useSelector(callback);

  return {
    fetchPostsData,
    isLoading,
    postsData,
    errorMessage,
  };
};



