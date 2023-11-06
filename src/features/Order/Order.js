import classes from './Order.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/hooks';
import { useSendOrder } from 'shared/hooks';
import {
  validateName,
  validateTel,
  validateEmail,
  validateConnect,
  classNames
} from 'shared/utils';
import { Button } from 'shared/ui';
import { Form } from './ui';

const date = new Date().toLocaleString();

export const Order = () => {
  const dispatch = useDispatch();
  const {
    orderData,
    getOrder,
    isModalActive,
    setIsModalActive
  } = useOrder();

  const { orderState, orderActions } = useSendOrder();
  const { sendOrder } = orderActions;

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch, getOrder]);

  const modalClassName = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleModalCloseClick = () => {
    dispatch(setIsModalActive(false));
  };

  const handleModalOverlayClick = () => {
    dispatch(setIsModalActive(false));
  };

  /** @typedef {import('react').SyntheticEvent} Event */

  /**
   * @function handleBodyClick
   * @param {Event} event
   * @returns {void}
   */

  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  const onNameChange = ({ target: { value } }) => {
    dispatch(orderActions.setName(value));
    dispatch(orderActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(orderActions.setTel(value));
    dispatch(orderActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(orderActions.setEmail(value));
    dispatch(orderActions.setIsValidEmail(validateEmail(value)));
  };

  const onConnectionChange = ({ target: { value } }) => {
    dispatch(orderActions.setConnection(value));
    dispatch(orderActions.setIsValidConnection(validateConnect(value)));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const order = {
      date,
      name: orderState.name,
      tel: orderState.tel,
      email: orderState.email,
      connection: orderState.connection,
    };
    dispatch(sendOrder(order));
    dispatch(orderActions.setIsDataSent(true));
  };

  useEffect(() => {
    if (!orderState.isDataSent) return;

    const timerId = setTimeout(() => {
      dispatch(setIsModalActive(false));
      dispatch(orderActions.setIsDataSent(false));
    }, 2000);

    return () => clearTimeout(timerId);
  }, [orderState.isDataSent, dispatch, orderActions.setIsDataSent, setIsModalActive]
  );

  const nameOptions = {
    value: orderState.name,
    isValidField: orderState.isValidName,
    onFieldChange: onNameChange,
    invalidMessage: orderData?.inputName.invalidMessage,
    type: orderData?.inputName.type,
    placeholder: orderData?.inputName.placeholder,
  };

  const telOptions = {
    value: orderState.tel,
    isValidField: orderState.isValidTel,
    onFieldChange: onTelChange,
    invalidMessage: orderData?.inputTel.invalidMessage,
    type: orderData?.inputTel.type,
    placeholder: orderData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: orderState.email,
    isValidField: orderState.isValidEmail,
    onFieldChange: onEmailChange,
    invalidMessage: orderData?.inputEmail.invalidMessage,
    type: orderData?.inputEmail.type,
    placeholder: orderData?.inputEmail.placeholder,
  };

  const connectOptions = {
    value: orderState.connection,
    isValidField: orderState.isValidConnection,
    onFieldChange: onConnectionChange,
    errorMessage: orderData?.connection?.invalidMessage,
    options: orderData?.connection?.options,
    label: orderData?.connection?.label,
  };

  const checkboxOptions = {
    isChecked: orderState.isChecked,
    setIsChecked: orderActions.setIsChecked,
    url: orderData?.inputPolicy?.url,
    content: orderData?.inputPolicy?.content,
  };

  const submitOptions = {
    handleFormSubmit,
    isSubmitDisabled: orderState.isSubmitDisabled,
  };

  const formOptions = {
    nameOptions,
    telOptions,
    emailOptions,
    connectOptions,
    checkboxOptions,
    submitOptions,
  };

  useEffect(() => {
    if (orderState) console.log(orderState.isDataSent);
  }, [orderState.isDataSent]);

  if (!isModalActive || !orderData) return null;
  return (
    <div
      onClick={handleModalOverlayClick}
      className={modalClassName}
    >
      <div onClick={handleBodyClick} className={classes.body}>
        {orderState.isDataSent && <span>Данные успешно отправлены!</span>}

        {isModalActive && (
          <Button
            onClickButton={handleModalCloseClick}
            className={classes.close}
            iconName={'close'}
            content={'icon'}
          />)
        }
        {!orderState.isDataSent && (
          <h2 className={classes.title}>{orderData?.title?.content}</h2>
        )}

        {!orderState.isDataSent && (
          <Form
            formOptions={formOptions}
          />)}
      </div>
    </div>
  );
};
