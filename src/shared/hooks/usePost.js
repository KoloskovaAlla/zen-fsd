import { useSelector } from 'react-redux';
import { getPost, resetPostErrorMessage, clearPostPage } from '../reducers/postSlice';

/**
 * @typedef {import('./types').PostState} PostState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.postReducer;

/**
 * @function usePost
 * @returns {PostState}
 */

export const usePost = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getPost,
    resetPostErrorMessage,
    clearPostPage,
  };
};
