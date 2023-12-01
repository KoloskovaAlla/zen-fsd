import classes from './Modal.module.scss';
import { Button } from 'shared/ui';
import { classNames } from 'shared/utils';

export const Modal = ({ isModalActive, setIsModalActive, content }) => {

  const handleModalCloseClick = () => {
    setIsModalActive(false);
  };

  const modalClassName = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  return (
    <div
      // onClick={handleModalOverlayClick}
      className={modalClassName}
    >
      <div className={classes.body}>
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
