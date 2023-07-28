import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react'; 
import { orderActions } from '../reducers/sendOrderSlice'; 
 
/** @type {(store: object) => object} */ 
const callback = (store) => store.sendOrderReducer; 
 
export const useSendOrder = () => { 
  const dispatch = useDispatch(); 
 
  const orderState = useSelector(callback); 
  const orderStateValues = Object.values(orderState); 
 
  useEffect(() => { 
    checkFormValidity(); 
  }, [...orderStateValues]); 
 
  const checkFormValidity = () => { 
    const isFormValid = orderState.isValidName && 
      orderState.isValidTel && 
      orderState.isValidEmail && 
      orderState.isValidConnection && 
      orderState.isChecked; 
 
    dispatch(orderActions.setIsSubmitDisabled(!isFormValid)); 
  }; 
 
  return { 
    orderState, 
    orderActions, 
  }; 
};