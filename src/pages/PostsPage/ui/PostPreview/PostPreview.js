import classes from './PostPreview.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usePost } from 'shared/hooks';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

/**
 * @function PostsPreview
 * @returns {null | JSX.Element}
 */


export const PostPreview = ({ details }) => {
  const { image, title, postKey } = details;
  const dispatch = useDispatch();
  const [isPreviewClicked, setIsPreviewClicked] = useState(false);
  const navigate = useNavigate();
  const postState = usePost();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const targetPath = `/posts/${postKey}`;

    const isNavToPost = postState.post &&
      postState.post.key === postKey &&
      currentPath !== targetPath &&
      isPreviewClicked;
    if (isNavToPost) {
      navigate(targetPath);
      setIsPreviewClicked(false);
    };
  }, [postKey, postState.post]);

  /**
   * @function handleBodyClick
   * @param {LinkClickEvent} event
   * @returns {void}
   */

  const handlePreviewClick = (event) => {
    event.preventDefault();
    dispatch(postState.getPost(postKey));
    setIsPreviewClicked(true);
  };

  return (
    <Link onClick={handlePreviewClick} to={`/posts/${postKey}`}>
      <div className={classes.postPreview}>
        <div className={classes.header}>
          <div className={classes.image}>
            <img
              src={image?.source}
              alt={image?.alternate}
            />
          </div >
        </div>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.read}>
          <span>Читать</span>
        </div>
      </div>
    </Link>
  );
};
