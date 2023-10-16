import { useSelector } from 'react-redux';
import { fetchPostsData } from '../reducers/postsSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.postsReducer;

/**
 * @typedef {import('./types').PostsState} State
 * @type {() => State}
 */

export const usePosts = () => {
  const postsState = useSelector(getState);

  return {
    fetchPostsData,
    ...postsState,
  };
};
