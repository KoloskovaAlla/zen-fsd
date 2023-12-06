import classes from './Modal.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePost } from 'shared/hooks';
import { Button } from 'shared/ui';
import { classNames } from 'shared/utils';

/**
 * @typedef {import('./types').ModalProps} ModalProps
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function Modal
 * @param {ModalProps} props
 * @returns {Element}
 */

export const Modal = ({
  isModalActive,
  setIsModalActive,
  title,
  content,
}) => {
  const dispatch = useDispatch();

  const { resetPostErrorMessage } = usePost();

  const modalClassName = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleModalCloseClick = () => {
    setIsModalActive(false);
    dispatch(resetPostErrorMessage());
  };

  const handleModalOverlayClick = () => {
    setIsModalActive(false);
    dispatch(resetPostErrorMessage());
  };

  /**
   * @typedef {import('react').SyntheticEvent} Event
   */

  /**
   * @function handleBodyClick
   * @param {Event} event
   * @returns {void}
   */

  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isModalActive) return;

    const timerId = setTimeout(() => {
      setIsModalActive(false);
      dispatch(resetPostErrorMessage());
    }, 2000);

    return () => clearTimeout(timerId);
  }, [dispatch, setIsModalActive, isModalActive]);

  return (
    <div
      className={modalClassName}
      onClick={handleModalOverlayClick}
    >
      <div
        className={classes.body}
        onClick={handleBodyClick}
      >
        <Button
          className={classes.close}
          onClickButton={handleModalCloseClick}
          iconName={'close'}
          content={'icon'}
        />
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.content}>{content}</div>
      </div>
    </div >
  );
};
