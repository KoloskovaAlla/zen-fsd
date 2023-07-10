import {useEffect} from 'react';
import classes from './Order.module.scss';
import { IconClose } from 'shared/icons';
import { useModal} from 'shared/model/hooks';
import {useDispatch} from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import {useSendOrder} from 'shared/model/hooks/useSendOrder';

export const Order = () => { 
  const { modalData:orderData, getModal, isModalActive, setIsModalActive } = useModal();
  const { isOrderSended, sendOrder } = useSendOrder();
  const dispatch = useDispatch();

  useEffect(() => {
    if (orderData) console.log(orderData.title);
  }, [orderData]);
 
  useEffect(() => {
    dispatch(getModal());
  }, [dispatch, getModal]);

  const classNameModal = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleModalClick = () => {
    dispatch(setIsModalActive(false))
  }

  const handleBodyClick = (event) => {
    event.stopPropagation()
  }

  if (orderData) return (
   <div onClick={handleModalClick} className={classNameModal}>
      <div onClick={handleBodyClick} className={classes.body}>
        {isOrderSended && <span>Данные отправлены успешно!</span>}

        {!isOrderSended && <Close />}

        {!isOrderSended && (
          <h2 className={classes.title}>{orderData?.title?.content}</h2>
        )} 
        {!isOrderSended &&
          <Form 
            isOrderSended={isOrderSended}
            sendOrder={sendOrder}
            form={form} 
          />
        } 
      </div>
    </div>  
  );
};
