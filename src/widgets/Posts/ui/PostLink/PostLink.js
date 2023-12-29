import classes from './PostLink.module.scss';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { trimString } from 'shared/utils';
import { usePost } from 'shared/hooks';

/**
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function Form
 * @param {any} props
 * @returns {Element}
 */

export const PostLink = ({ postKey, post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postState = usePost();
  const fullPostText = post.article.join(' ');
  const previewPostText = trimString(fullPostText, 40);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const targetPath = `/posts/${postKey}`;
    const isNavToPost = postState.post &&
      postState.post.key === postKey &&
      currentPath !== targetPath;

    if (isNavToPost) console.log(isNavToPost);

    if (isNavToPost) navigate(targetPath);
  }, [postKey, postState.post]);

  /**
   * @function handlePreviewClick
   * @param {LinkClickEvent} event
   * @return {void}
   */

  const handlePreviewClick = (event) => {
    event.preventDefault();
    dispatch(postState.getPost(postKey));
  };

  return (
    <Link className={classes.post} onClick={handlePreviewClick} to={`/posts/${postKey}`}>
      <button className={classes.image}>
        <img src={post?.image?.source} alt='alternate img' />
      </button>
      <div className={classes.body}>
        <button className={classes.titlePost}>{post.title}</button>
        <div className={classes.article}>{`${previewPostText}...`}</div>
        <button className={classes.link}>Read more...</button>
      </div>
    </Link>
  );
};
