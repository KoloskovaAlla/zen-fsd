import classes from './PostsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePosts, useLang } from 'shared/model/hooks';
import { PostPreview } from './ui';

/** 
 * @function PostsPage
 * @returns {JSX.Element | null}
 */

const PostsPage = () => {
  const dispatch = useDispatch();
  const { fetchPostsData, postsData } = usePosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang } = useLang();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch, fetchPostsData, lang]);

  if (!postsData) return null;
  return (
    <>
      {postsData?.posts && (
        <div className={classes.posts}>
          <div className={classes.wrapper}>
            <ul className={classes.list}>
              {Object.keys(postsData.posts).map((post, index) => (
                <li
                  className={classes.listItem}
                  key={index}
                >
                  <PostPreview details={postsData.posts[post]} />
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
