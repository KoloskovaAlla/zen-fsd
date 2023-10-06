import { useSelector } from 'react-redux';
import { getPost } from '../reducers/postSlice'

/** @type {(store: object) => object} */
const getState = (store) => store.postReducer

/**  
 * @typedef {import('./types').PostState} State
 * @type {() => State}
 */

export const usePost = () => {
  const postState = useSelector(getState);

  return {
    getPost,
    ...postState,
  };
};
