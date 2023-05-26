import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../reducers/dataSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.dataReducer;

/** 
 * @typedef {import('./types').NavState} State 
 * @type {() => State}
*/

export const useNav = () => {
  const {
    isLoading,
    data: navItems,
    errorMessage
  } = useSelector(callback);  

  const endPoint = 'header/menuItems';
  const dispatch = useDispatch(); 
 
  // @ts-ignore  
  const getNav = () => { dispatch(getData(endPoint)); };

  // useEffect(() => {
  //     console.log(navItems)  
  // }, [navItems])

  return {
    getNav,
    isLoading,
    navItems,
    errorMessage,
  };
};
