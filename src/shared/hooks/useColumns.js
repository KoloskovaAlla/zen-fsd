import { useSelector } from 'react-redux';
import { getColumns } from '../reducers/columnsSlice';

/**
 * @typedef {import('./types').ColumnsState} ColumnsState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */

const getState = (store) => store.columnsReducer;

export const useColumns = () => {
  const state = useSelector(getState);

  /**
   * @function useColumns
   * @returns {ColumnsState}
   */

  return {
    ...state,
    getColumns,
  };
};
