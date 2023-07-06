import {useEffect} from 'react';
import classes from './Modal.module.scss';
import { IconClose } from 'shared/icons';
import { useModal} from 'shared/model/hooks';
import {useDispatch} from 'react-redux';

export const Modal = () => { 
  const { modalData, getModal } = useModal();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getModal());
  }, [dispatch, getModal]);

  return (
    <div className={classes.modal}>
      <button className={classes.close} >    
        <IconClose />
      </button>   

      {/* {data && <h3 className={classes.title}> {data.title.content}</h3>}       */}
      Модалка
    </div>
  );
};
