import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { usePosts } from 'shared/model/hooks';
import { PostLink } from './ui/PostLink';

/** 
 * @function Posts
 * @returns {JSX.Element}
 */

export const Posts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { fetchPostsData, postsData } = usePosts();
  const [hiddenPosts, setHiddenPosts] = useState(false);

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch, fetchPostsData]);

  useEffect(() => {
    const isCurrentPathName = location.pathname === '/posts'
    setHiddenPosts(isCurrentPathName);
  }, [location]);

  useEffect(() => {
    if (postsData) console.log(postsData.items);
  }, [postsData]);

  return (
    <div>
      {!hiddenPosts && postsData && (
        <section className={classes.posts}>
          <div className={classes.wrapper}>
            {postsData.title && (
              <h2 className={classes.title}>
                {postsData?.title.content}
              </h2>
            )}

            <ul className={classes.list}>
              {Object.keys(postsData.items).map((postKey) =>
                <li key={postKey}>
                  <PostLink
                    postKey={postKey}
                    post={postsData[postKey]}
                  />
                </li>
              )}
            </ul>

            <Link className={classes.post} to='/posts'>
              <button
                className={classes.button}
                type='button'
              >
                {postsData?.buttonText}
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
