import { useSelector } from 'react-redux';
import { getColumns } from '../reducers/columnsSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.columnsReducer;

/** 
 * @typedef {import('./types').ColumnsState} State 
 * @type {() => State}
  */

export const useColumns = () => {
  const {
    isLoading,
    columns,
    errorMessage,
  } = useSelector(callback);

  return {
    getColumns,
    isLoading,
    columns,
    errorMessage,
  };
};
