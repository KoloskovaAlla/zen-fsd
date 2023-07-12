import { useEffect } from 'react';
import classes from './Order.module.scss';
import { IconClose } from 'shared/icons';
import { useOrder } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useSendOrder } from 'shared/model/hooks/useSendOrder';
import { FieldName, FieldTel, FieldEmail, Connection } from 'shared/ui';
import { Field } from 'entites';
import { useState } from 'react';
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
  const [connect, setConnect] = useState('')
  const [isValidConnect, setIsValidConnect] = useState(true)

  useEffect(() => {
    if (orderData) console.log(orderData.inputName);
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
    console.log(target.value);
    const value = target.value;
    setName(value);
    setIsValidName(validateName(value));
  };

  const handleTelChange = ({ target }) => {
    const value = target.value;
    setTel(value);
    setIsValidTel(validateTel(value));
  };

  const handleEmailChange = ({ target }) => {
    const value = target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleConnectChange = ({ target }) => {
    const value = target.value
    setConnect(value)
    setIsValidConnect(validateConnect(value))
  }

  const className = classNames(
    classes.name,
    {[classes.succes]: isValidName},
    []
  );
  // return (
  //   <div>Модалка</div>
  // )
 
   
  if (orderData) return (
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
            {/* {orderData?.inputName && (
              <label className={className}>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={onNameChange}
                />
                {!isValidName && name && <span>Некорректное имя</span>}
              </label>
            )} */}

          {/* {orderData?.inputName && (
            <Field 
              inputDetails={orderData.inputName}
              parentClassName={classes.name} 
              value={name}
              setValue={setName}
            />
          )} */}

          {/* {orderData?.inputTel && (
            <Field 
              inputDetails={orderData.inputTel}
              parentClassName={classes.tel} 
              value={tel}
              setValue={setTel}
            />
          )} */}

          {/* {orderData?.inputEmail && (
            <Field 
              inputDetails={orderData.inputEmail}
              parentClassName={classes.email} 
              value={email}
              setValue={setEmail}
            />
          )}      */}

          {/* {orderData?.inputEmail && (
              <FieldEmail
                email={email}
                onEmailChange={handleEmailChange}
                isValidEmail={isValidEmail}
                placeholder='Email'
              />
          )} */}

          {/* <Connection
              connect={connect}
              onConnectChange={handleConnectChange}
              isValidConnect={isValidConnect}
              connection={orderData?.connection}
          /> */}

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
