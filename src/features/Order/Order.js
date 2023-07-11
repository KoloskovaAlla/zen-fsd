import { useEffect } from 'react';
import classes from './Order.module.scss';
import { IconClose } from 'shared/icons';
import { useOrder } from 'shared/model/hooks';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useSendOrder } from 'shared/model/hooks/useSendOrder';
import { FieldName, FieldTel, FieldEmail } from 'shared/ui';

export const Order = () => {
  const { orderData, getOrder, isModalActive, setIsModalActive } = useOrder();
  const { isOrderSended, sendOrder } = useSendOrder();
  const dispatch = useDispatch();

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
              <FieldName
                name={name}
                setName={setName}
                onNameChange={handleNameChange}
                isValidName={isValidName}
                placeholder='Name'
              />
            )} */}

            {/* {inputTel && (
              <FieldTel
                tel={tel}
                onTelChange={handleTelChange}
                isValidTel={isValidTel}
                placeholder='Telphone number'
              />
            )} */}

            {/* {inputEmail && (
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
              isValidConnection={isValidConnect}
              connection={connection}
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
