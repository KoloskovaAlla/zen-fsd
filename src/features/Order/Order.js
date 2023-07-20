import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Order.module.scss';
import { IconClose } from 'shared/icons';
import { useOrder } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useSendOrder } from 'shared/model/hooks/useSendOrder';
import { TextField, SelectField } from '../../entities';
import { validateName, validateTel, validateEmail, validateConnect } from 'shared/lib';


export const Order = () => {
  const { orderData, getOrder, isModalActive, setIsModalActive } = useOrder();
  const { isOrderSended, sendOrder } = useSendOrder();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [tel, setTel] = useState('');
  const [isValidTel, setIsValidTel] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(true)

  useEffect(() => {
    if (orderData) console.log(orderData.inputName.type);
  }, [orderData]);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch, getOrder]);

  const classNameModal = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleModalClick = () => {
    dispatch(setIsModalActive(false))
  }

  const handleBodyClick = (event) => {
    event.stopPropagation()
  }

  const handleFormInput = () => { };

  const handleFormSubmit = () => { };

  const onNameChange = ({ target }) => {
    const value = target.value;
    setName(value);
    setIsValidName(validateName(value));
  };

  const onTelChange = ({ target }) => {
    const value = target.value;
    setTel(value);
    setIsValidTel(validateTel(value));
  };

  const onEmailChange = ({ target }) => {
    const value = target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const onConnectionChange = ({ target }) => {
    const value = target.value
    setConnection(value)
    setIsValidConnection(validateConnect(value))
  }

  const className = classNames(
    classes.name,
    { [classes.succes]: isValidName },
    []
  );

  if (!orderData) return null;
  return (
    <div onClick={handleModalClick} className={classNameModal}>
      <div onClick={handleBodyClick} className={classes.body}>
        {isOrderSended && <span>Данные отправлены успешно!</span>}
        {/* {!isOrderSended && <Close />} */}

        {!isOrderSended && (
          <h2 className={classes.title}>{orderData?.title?.content}</h2>
        )}

        {!isOrderSended && (
          <form
            onInput={handleFormInput}
            onSubmit={handleFormSubmit}
            className={classes.form}
          >

            {orderData?.inputName && (
              <TextField
                className={classes.name}
                type={orderData.inputName.type}
                placeholder={orderData.inputName.placeholder}
                label=''
                value={name}
                isValid={isValidName}
                invalidMessage={orderData.inputName.invalidMessage}
                onFieldChange={onNameChange}
              />
            )}

            {orderData?.inputTel && (
              <TextField
                className={classes.tel}
                type={orderData.inputTel.type}
                placeholder={orderData.inputTel.placeholder}
                label=''
                value={tel}
                isValid={isValidTel}
                invalidMessage={orderData.inputTel.invalidMessage}
                onFieldChange={onTelChange}
              />
            )}

            {orderData?.inputEmail && (
              <TextField
                className={classes.email}
                type={orderData.inputEmail.type}
                placeholder={orderData.inputEmail.placeholder}
                label=''
                value={email}
                isValid={isValidEmail}
                invalidMessage={orderData.inputEmail.invalidMessage}
                onFieldChange={onEmailChange}
              />
            )}

            {orderData?.connection?.options && (
              <SelectField
                className={classes.connection}
                value={connection}
                label={orderData.connection.label}
                options={orderData.connection.options}
                isValid={isValidConnection}
                invalidMessage={orderData.connection.invalidMessage}
                onFieldChange={onConnectionChange}
              />
            )}

            {/* <Policy inputPolicy={inputPolicy} isChecked={isChecked} setIsChecked={setIsChecked} /> */}

            {/* <Submit
              buttonText={buttonText}
              disabled={isSubmitDisabled}
            /> */}
          </form>
        )}
      </div>
    </div>
  );
};
