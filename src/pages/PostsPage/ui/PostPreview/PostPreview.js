import classes from './PostPreview.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { usePost } from 'shared/hooks';

/**
 * @function PostsPreview
 * @returns {JSX.Element | null}
 */


export const PostPreview = ({ details }) => {
  const { image, title, postKey } = details;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postState = usePost();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const targetPath = `/posts/${postKey}`;

    const isNavToPost = postState.post &&
      postState.post.key === postKey &&
      currentPath !== targetPath;

    if (isNavToPost) {
      navigate(targetPath);
      console.log('сейчас перейдем');
    };
  }, [postKey, postState.post]);

  const handlePreviewClick = (event) => {
    event.preventDefault();
    dispatch(postState.getPost(postKey));
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
