import classes from './ErrorModal.module.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePost, useLang } from 'shared/hooks';
import { ERROR_MODAL_TITLE, POST_ERRORS } from 'shared/constants/api';
import { Button } from 'shared/ui';
import { classNames } from 'shared/utils';

/**
 * @typedef {import('./types').ModalProps} ModalProps
 */

/**
 * @function Modal
 * @returns {null | JSX.Element}
 */

export const ErrorModal = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const { lang } = useLang();
  const { postErrorMessage } = usePost();
  const { postErrorModalMessage } = POST_ERRORS[lang];

  useEffect(() => {
    if (postErrorMessage !== '') {
      setIsModalActive(true);
      setContent(postErrorModalMessage);
    }
  }, [postErrorMessage, lang]);

  const { resetPostErrorMessage } = usePost();

  const modalClassName = classNames(classes.modal, {
    [classes.active]: isModalActive,
  });

  const handleCloseClick = () => {
    setIsModalActive(false);
    dispatch(resetPostErrorMessage());
  };

  const handleOverlayClick = () => {
    setIsModalActive(false);
    dispatch(resetPostErrorMessage());
  };

  /**
   * @function handleBodyClick
   * @param {DivClickEvent} event
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
      onClick={handleOverlayClick}
    >
      <div
        className={classes.body}
        onClick={handleBodyClick}
      >
        <Button
          className={classes.close}
          onClickButton={handleCloseClick}
          iconName={'close'}
          content={'icon'}
        />
        <h2 className={classes.title}>{ERROR_MODAL_TITLE}</h2>
        <div className={classes.content}>{content}</div>
      </div>
    </div >
  );
};
