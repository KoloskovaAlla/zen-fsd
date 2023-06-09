import { useSelector } from 'react-redux';
import { getLists } from '../reducers/listsSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.listsReducer;

/** 
 * @typedef {import('../schema/hookTypes').ListsState} State 
 * @type {() => State}
*/

export const useLists = () => {
  const {
    isLoading,
    lists,
    errorMessage,
  } = useSelector(callback);

  return {
    getLists,
    isLoading,
    lists,
    errorMessage,
  };
};
