import { useEffect } from 'react';
import classes from './Order.module.scss';
import { IconClose } from 'shared/icons';
import { useOrder } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useSendOrder } from 'shared/model/hooks/useSendOrder';
import { Field } from '../../entities';
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
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(true)

  // useEffect(() => {
  //   if (orderData) console.log(orderData.connection);
  // }, [orderData]);

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
    {[classes.succes]: isValidName},
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
              <Field 
                className={classes.name}
                type={orderData.inputName.type}
                placeholder={orderData.inputName.placeholder}
                label=''
                value={name}
                isValid={isValidName}                
                invalidMessage={orderData.inputName.invalidMessage}
                onChange={onNameChange}  
                options=''            
              />
            )}

            {orderData?.inputTel && (
              <Field 
                className={classes.tel} 
                type={orderData.inputTel.type}
                placeholder={orderData.inputTel.placeholder}
                label=''
                value={tel}
                isValid={isValidTel}                
                invalidMessage={orderData.inputTel.invalidMessage}
                onChange={onTelChange} 
                options=''             
              />
            )}
          
            {orderData?.inputEmail && (
              <Field 
                className={classes.email} 
                type={orderData.inputEmail.type}
                placeholder={orderData.inputEmail.placeholder}
                label=''
                value={email}
                isValid={isValidEmail}               
                invalidMessage={orderData.inputEmail.invalidMessage}
                onChange={onEmailChange}  
                options=''             
              />
            )}    
          
          {orderData?.connection?.options && (
            <Field
              className={classes.connection} 
              type={orderData.connection.type}
              placeholder={orderData.connection}
              label=''
              value={connection}
              isValid={isValidConnection}               
              invalidMessage={orderData.connection.invalidMessage}
              onChange={onConnectionChange} 
              options={orderData.connection.options}
            />          
          )}


            {/* {orderData?.inputEmail && (
              <Field 
                className={classes.email} 
                type={orderData.inputEmail.type}
                placeholder={orderData.inputEmail.placeholder}
                label=''
                value={email}
                isValid={isValidEmail}               
                invalidMessage={orderData.inputEmail.invalidMessage}
                onChange={onEmailChange}              
              />
            )}   */}

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
