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
  const { fetchPostsData, postsData: posts } = usePosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang } = useLang();


  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch, fetchPostsData, lang]);

  if (!posts) return null;
  return (
    <>
      {posts?.length > 0 && (
        <div className={classes.posts}>
          <div className={classes.wrapper}>
            <ul className={classes.list}>
              {posts.map((post, index) => (
                <li
                  className={classes.listItem}
                  key={index}
                >
                  <PostPreview details={post} />
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
