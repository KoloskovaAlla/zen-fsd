import classes from './Order.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/hooks';
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

/**
 * @function Order
 * @returns {null | JSX.Element}
 */

export const Order = () => {
  const dispatch = useDispatch();
  const orderState = useOrder();

  useEffect(() => {
    dispatch(orderState.orderActions.getOrder());
  }, [dispatch, orderState.orderActions.getOrder]);

  const modalClassName = classNames(classes.modal, {
    [classes.active]: orderState.isModalActive,
  });

  const handleModalCloseClick = () => {
    dispatch(orderState.orderActions.setIsModalActive(false));
  };

  const handleModalOverlayClick = () => {
    dispatch(orderState?.orderActions.setIsModalActive(false));
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
    dispatch(orderState.orderActions.setName(value));
    dispatch(orderState.orderActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setTel(value));
    dispatch(orderState.orderActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setEmail(value));
    dispatch(orderState.orderActions.setIsValidEmail(validateEmail(value)));
  };

  const onConnectionChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setConnection(value));
    dispatch(orderState.orderActions.setIsValidConnection(validateConnect(value)));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isOrderValid = orderState.isValidName &&
      orderState.isValidTel &&
      orderState.isValidEmail &&
      orderState.isValidConnection &&
      orderState.isChecked;

    if (isOrderValid) {
      const order = {
        date,
        name: orderState.name,
        tel: orderState.tel,
        email: orderState.email,
        connection: orderState.connection,
      };
      dispatch(orderState?.orderActions.sendOrder(order));
      dispatch(orderState.orderActions.setIsDataSent(true));
    };
  };

  useEffect(() => {
    if (!orderState.isDataSent) return;

    const timerId = setTimeout(() => {
      dispatch(orderState.orderActions.setIsModalActive(false));
      dispatch(orderState.orderActions.setIsDataSent(false));
      dispatch(orderState.orderActions.setName(''));
      dispatch(orderState.orderActions.setTel(''));
      dispatch(orderState.orderActions.setEmail(''));
      dispatch(orderState.orderActions.setConnection(''));
      dispatch(orderState.orderActions.setIsChecked(false));
    }, 2000);

    return () => clearTimeout(timerId);
  }, [orderState.isDataSent, dispatch, orderState?.orderActions.setIsDataSent, orderState?.orderActions.setIsModalActive]);

  const nameOptions = {
    value: orderState.name,
    isValidField: orderState.isValidName,
    onFieldChange: onNameChange,
    invalidMessage: orderState.orderData?.inputName.invalidMessage,
    type: orderState.orderData?.inputName.type,
    placeholder: orderState.orderData?.inputName.placeholder,
  };

  const telOptions = {
    value: orderState.tel,
    isValidField: orderState.isValidTel,
    onFieldChange: onTelChange,
    invalidMessage: orderState.orderData?.inputTel.invalidMessage,
    type: orderState.orderData?.inputTel.type,
    placeholder: orderState.orderData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: orderState.email,
    isValidField: orderState.isValidEmail,
    onFieldChange: onEmailChange,
    invalidMessage: orderState.orderData?.inputEmail.invalidMessage,
    type: orderState.orderData?.inputEmail.type,
    placeholder: orderState.orderData?.inputEmail.placeholder,
  };

  const connectOptions = {
    value: orderState.connection,
    isValidField: orderState.isValidConnection,
    onFieldChange: onConnectionChange,
    errorMessage: orderState.orderData?.connection?.invalidMessage,
    options: orderState.orderData?.connection?.options,
    label: orderState.orderData?.connection?.label,
  };

  const checkboxOptions = {
    isChecked: orderState.isChecked,
    setIsChecked: orderState.orderActions.setIsChecked,
    url: orderState.orderData?.inputPolicy?.url,
    content: orderState.orderData?.inputPolicy?.content,
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

  if (!orderState.isModalActive || !orderState.orderData) return null;
  return (
    <div
      onClick={handleModalOverlayClick}
      className={modalClassName}
    >
      <div onClick={handleBodyClick} className={classes.body}>
        {orderState.isDataSent && <span>Данные успешно отправлены!</span>}

        {orderState.isModalActive && (
          <Button
            onClickButton={handleModalCloseClick}
            className={classes.close}
            iconName={'close'}
            content={'icon'}
          />)
        }
        {!orderState.isDataSent && (
          <h2 className={classes.title}>{orderState.orderData?.title?.content}</h2>
        )}

        {!orderState.isDataSent && (
          <Form
            formOptions={formOptions}
          />)}
      </div>
    </div>
  );
};
