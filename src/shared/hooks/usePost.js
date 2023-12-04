import { useSelector } from 'react-redux';
import { getPost } from '../reducers/postSlice';
import { useDispatch } from 'react-redux';

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
  };
};
