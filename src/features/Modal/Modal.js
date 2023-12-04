import classes from './Modal.module.scss';
import { Button } from 'shared/ui';
import { classNames } from 'shared/utils';
import { usePost } from 'shared/hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { postReducer } from 'shared/reducers';
import { resetPostErrorMessage } from 'shared/reducers/postSlice';

export const Modal = ({ isModalActive, setIsModalActive, content }) => {
  const dispatch = useDispatch();

  const handleModalCloseClick = () => {
    setIsModalActive(false);

  };

  const handleModalOverlayClick = () => {
    setIsModalActive(false);
    // dispatch();
    dispatch(resetPostErrorMessage());
  };

  const modalClassName = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleModalOverlayClick}
      className={modalClassName}
    >
      <div className={classes.body} onClick={handleBodyClick}>
        {(
          <Button
            onClickButton={handleModalCloseClick}
            className={classes.close}
            iconName={'close'}
            content={'icon'}
          />)
        }
        {(
          <h2 className={classes.title}>Сообщение об ошибке</h2>
        )}

        <div>{content}</div>
      </div>

    </div >
  );
};
