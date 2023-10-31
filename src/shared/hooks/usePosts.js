import { useSelector } from 'react-redux';
import { getPosts } from '../reducers/postsSlice';

/**
 * @typedef {import('./types').PostsState} PostsState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.postsReducer;

/**
 * @function usePost
 * @returns {PostsState}
 */

export const usePosts = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getPosts,
  };
};
