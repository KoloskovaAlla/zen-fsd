import { useEffect } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useOrder } from 'shared/model/hooks'; 
import { classNames } from 'shared/lib/classNames'; 
import { useSendOrder } from 'shared/model/hooks'; 
import { validateName, validateTel, validateEmail, validateConnect } from 'shared/lib'; 
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
            handleFormSubmit={handleFormSubmit}
            orderData={orderData} 
            name={name} 
            isValidName={isValidName} 
            onNameChange={onNameChange} 
            tel={tel}
            isValidTel={isValidTel} 
            onTelChange={onTelChange} 
            email={email} 
            isValidEmail={isValidEmail} 
            onEmailChange={onEmailChange} 
            connection={connection} 
            isValidConnection={isValidConnection} 
            onConnectionChange={onConnectionChange} 
            isChecked={isChecked} 
            setIsChecked={setIsChecked} 
            isSubmitDisabled={isSubmitDisabled}
          />
        )} 
      </div> 
    </div> 
  ); 
};
