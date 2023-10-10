import classes from './PostsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePostsPage, useLang } from 'shared/model/hooks';
import { PostPreview } from './ui';

/** 
 * @function PostsPage
 * @returns {JSX.Element | null}
 */

const PostsPage = () => {
  const dispatch = useDispatch();
  const {
    getPostsPage,
    ...postsPageState
  } = usePostsPage();
  const { postsPage } = postsPageState;
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getPostsPage());
  }, [dispatch,getPostsPage, lang]);

  if (!postsPage) return null;
  return (
    <>
      {postsPage && (
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
      )}
    </>
  );
};

export default PostsPage;
