import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendOrder, setIsSubmitDisabled } from '../reducers/sendOrderSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.sendOrderReducer;

export const useSendOrder = () => {
  const dispatch = useDispatch();

  const {
    isSending,
    errorMessage,
    isOrderSended,
    name,
    isValidName,
    tel,
    isValidTel,
    email,
    isValidEmail,
    connection,
    isValidConnection,
    isChecked,
    isSubmitDisabled,
  } = useSelector(callback);

  useEffect(() => {
    checkFormValidity();
  }, [name, isValidName, tel, isValidTel, email, isValidEmail, connection, isValidConnection, isChecked]);

  const checkFormValidity = () => {
    const isFormValid = name &&
      isValidName &&
      tel &&
      isValidTel &&
      email &&
      isValidEmail &&
      connection &&
      isValidConnection &&
      isChecked;

    dispatch(setIsSubmitDisabled(!isFormValid));
  };

  return {
    isSending,
    errorMessage,
    isOrderSended,
    sendOrder,
    name,
    isValidName,
    tel,
    isValidTel,
    email,
    isValidEmail,
    connection,
    isValidConnection,
    isChecked,
    isSubmitDisabled,
    setIsSubmitDisabled,
  };
};
