import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/model/hooks';
import { useSendOrder } from 'shared/model/hooks';
import { validateName, validateTel, validateEmail, validateConnect, classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { Form } from './ui'
import classes from './Order.module.scss';

const date = new Date().toLocaleString();

export const Order = () => {
  const dispatch = useDispatch();
  const { orderData, getOrder, isModalActive, setIsModalActive } = useOrder();
  const { orderState, orderActions } = useSendOrder();
  const { sendOrder } = orderActions;

  const {
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
    isDataSent,
  } = orderState;

  const {
    setName,
    setIsValidName,
    setTel,
    setIsValidTel,
    setEmail,
    setIsValidEmail,
    setConnection,
    setIsValidConnection,
    setIsChecked,
    setIsDataSent,
  } = orderActions;

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch, getOrder]);

  const classNameModal = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleModalClick = () => {
    dispatch(setIsModalActive(false));
  };

  /**
   * @typedef {import('react').SyntheticEvent} Event
   * @type {( event: Event ) => void} 
   */
  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  const onNameChange = ({ target }) => {
    const value = target.value;
    dispatch(setName(value));
    dispatch(setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target }) => {
    const value = target.value;
    dispatch(setTel(value));
    dispatch(setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target }) => {
    const value = target.value;
    dispatch(setEmail(value));
    dispatch(setIsValidEmail(validateEmail(value)));
  };

  const onConnectionChange = ({ target }) => {
    const value = target.value;
    dispatch(setConnection(value));
    dispatch(setIsValidConnection(validateConnect(value)));
  };

  const onClickButtonClose = () => {
    dispatch(setIsModalActive(false));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const order = {
      date,
      name: name,
      tel: tel,
      email: email,
      connection: connection,
    };
    dispatch(sendOrder(order));
    dispatch(setIsDataSent(true));
  };
  useEffect(() => {
    if (isDataSent) {
      setTimeout(() => {
        dispatch(setIsModalActive(false));
        dispatch(setIsDataSent(false));
      }, 3000);
    };
  }, [isDataSent, dispatch, setIsDataSent, setIsModalActive]);

  const formProps = {
    handleFormSubmit,
    orderData,
    name,
    isValidName,
    onNameChange,
    tel,
    isValidTel,
    onTelChange,
    email,
    isValidEmail,
    onEmailChange,
    connection,
    isValidConnection,
    onConnectionChange,
    isChecked,
    setIsChecked,
    isSubmitDisabled,
  };

  const otherFormProps = {
    handleFormSubmit,
    orderData,
    connection,
    isValidConnection,
    onConnectionChange,
    isChecked,
    setIsChecked,
    isSubmitDisabled,
  };

  const nameOptions = {
    value: formProps.name,
    isValidField: formProps.isValidName,
    onFieldChange: formProps.onNameChange,
    invalidMessage: orderData?.inputName.invalidMessage,
    type: orderData?.inputName.type,
    placeholder: orderData?.inputName.placeholder,
  };

  const telOptions = {
    value: formProps.tel,
    isValidField: formProps.isValidTel,
    onFieldChange: formProps.onTelChange,
    invalidMessage: orderData?.inputTel.invalidMessage,
    type: orderData?.inputTel.type,
    placeholder: orderData?.inputTel.placeholder,
  };
  const emailOptions = {
    value: formProps.email,
    isValidField: formProps.isValidEmail,
    onFieldChange: formProps.onEmailChange,
    invalidMessage: orderData?.inputEmail.invalidMessage,
    type: orderData?.inputEmail.type,
    placeholder: orderData?.inputEmail.placeholder,
  };

  if (!orderData) return null;
  return (
    <div onClick={handleModalClick} className={classNameModal}>
      <div onClick={handleBodyClick} className={classes.body}>
        {isDataSent && <span>Данные отправлены успешно!</span>}

        {isModalActive && (
          <Button
            onClickButton={onClickButtonClose}
            className={classes.close}
            iconName={'close'}
            content={'icon'}
          />)
        }

        {!isDataSent && (
          <h2 className={classes.title}>{orderData?.title?.content}</h2>
        )}

        {!isDataSent && (
          <Form
            nameOptions={nameOptions}
            telOptions={telOptions}
            emailOptions={emailOptions}
            otherFormProps={otherFormProps}
          />)};
      </div>
    </div>
  );
};
