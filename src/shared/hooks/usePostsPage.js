import { useSelector } from 'react-redux';
import { getPostsPage } from '../reducers/postsPageSlice';

/**
 * @typedef {import('./types').PostsPageState} PostsPageState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.postsPageReducer;

/**
 * @function usePostsPage
 * @returns {PostsPageState}
 */

export const usePostsPage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getPostsPage,
  };
};
