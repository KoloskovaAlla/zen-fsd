import classes from './PostsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { usePostsPage, useLang, useDocumentTitle } from 'shared/hooks';
import { PostPreview } from './ui';

/**
 * @function PostsPage
 * @returns {null | JSX.Element}
 */

const PostsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    getPostsPage,
    ...postsPageState
  } = usePostsPage();
  const { postsPage } = postsPageState;
  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Blog'
    : 'ZEN | Блог';

  const currentPage = location.pathname;

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(getPostsPage());
  }, [dispatch, getPostsPage, lang, currentPage]);

  if (!postsPage) return null;
  return (
    <div className={classes.posts}>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {Object.keys(postsPage).map((post, index) => (
            <li
              className={classes.listItem}
              key={index}
            >
              <PostPreview details={postsPage[post]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsPage;
