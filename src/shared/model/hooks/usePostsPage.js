import { useSelector } from 'react-redux';
import { getPostsPage } from '../reducers/postsPageSlice';

/** @type {(store: object) => object} */
const getState = (store) => store.postsPageReducer;

/** 
 * @typedef {import('./types').postsPageState} State 
 * @type {() => State}
 */

export const usePostsPage = () => {
  const postsPageState = useSelector(getState);

  return {
    getPostsPage,
    ...postsPageState,
  };
};
