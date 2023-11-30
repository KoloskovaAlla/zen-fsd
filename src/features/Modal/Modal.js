import classes from './Modal.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePost } from 'shared/hooks';
import { Button } from 'shared/ui';

export const Modal = ({ content }) => {
  const handleModalCloseClick = () => {

  };
  return (
    <div
    // onClick={handleModalOverlayClick}
    // className={modalClassName}
    >


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

    </div >
  );
};
