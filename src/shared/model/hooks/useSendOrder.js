import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendOrder } from '../reducers/sendOrderSlice';

/** @type {(store: object) => object} */
const callback = (store) => store.sendOrderReducer;

export const useSendOrder = () => {
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
    setIsSubmitDisabled
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

    setIsSubmitDisabled(!isFormValid);
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
