import classes from './Modal.module.scss';
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
  };

  const handleModalOverlayClick = () => {
    setIsModalActive(false);
    dispatch(resetPostErrorMessage());
  };

  /** @typedef {import('react').SyntheticEvent} Event */

  /**
   * @function handleBodyClick
   * @param {Event} event
   * @returns {void}
   */

  const handleBodyClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleModalOverlayClick}
      className={modalClassName}
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
