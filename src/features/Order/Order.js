import { useEffect } from 'react'; 
import { useState } from 'react'; 
import classes from './Order.module.scss'; 
 
import { useOrder } from 'shared/model/hooks'; 
import { useDispatch } from 'react-redux'; 
import { classNames } from 'shared/lib/classNames'; 
import { useSendOrder } from 'shared/model/hooks/useSendOrder'; 
import { TextField, SelectField } from '../../entities'; 
import { validateName, validateTel, validateEmail, validateConnect } from 'shared/lib'; 
import { Checkbox } from 'shared/ui'; 
import { Button } from 'shared/ui'; 
import { orderActions } from 'shared/model/reducers/sendOrderSlice'; 
 
const date = new Date().toLocaleString(); 
 
export const Order = () => { 
  const { orderData, getOrder, isModalActive, setIsModalActive } = useOrder(); 
 
  const dispatch = useDispatch(); 
 
  const { orderState, orderActions } = useSendOrder(); 
  // console.log(orderActions)
  const { sendOrder } = orderActions; 
 
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
  } 
 
  const handleBodyClick = (event) => { 
    event.stopPropagation() 
  } 
 
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
    const value = target.value 
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
    setTimeout(() => {
      dispatch(setIsModalActive(false))
      setIsDataSent(false)
    }, 3000)
  }; 

  useEffect(() => {
    console.log(isDataSent);
  }, [isDataSent])
 
  if (!orderData) return null; 
  return ( 
    <div onClick={handleModalClick} className={classNameModal}> 
      <div onClick={handleBodyClick} className={classes.body}> 
        {isDataSent && <span>Данные отправлены успешно!</span>} 
 
        {!isDataSent && ( 
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
          <form 
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
 
            <label className={classes.policy}> 
              <Checkbox 
                isChecked={isChecked} 
                setIsChecked={setIsChecked} 
              /> 
              <a href={orderData.inputPolicy.url}> 
                {orderData.inputPolicy.content} 
              </a> 
            </label> 
 
            <Button 
              className={classes.submit} 
              label='submit' 
              content={'text'} 
              disabled={isSubmitDisabled} 
            /> 
          </form> 
        )} 
      </div> 
    </div> 
  ); 
};
