import {useEffect} from 'react';
import classes from './Modal.module.scss';
import { IconClose } from 'shared/icons';
import { useModal} from 'shared/model/hooks';
import {useDispatch} from 'react-redux';
import { classNames } from 'shared/lib/classNames';

export const Modal = () => { 
  const { modalData, getModal, isModalActive, setIsModalActive } = useModal();
  const dispatch = useDispatch();
 
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

  return (
   <div onClick={handleModalClick} className={classNameModal}>
      <div onClick={handleBodyClick} className={classes.body}>
        {isDataSent && <span>Данные отправлены успешно!</span>}

        {!isDataSent && <Close />}

        {title && !isDataSent && (
          <Title
            titleData={title}
          />
        )}

        {!isDataSent &&
          <Form
            isDataSent={isDataSent}
            setIsDataSent={setIsDataSent}
            form={form}
          />
        }
      </div>
    </div>
  );
};
