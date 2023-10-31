import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { usePosts, useLang } from 'shared/hooks';
import { PostLink } from './ui/PostLink';

/**
 * @function Posts
 * @returns {JSX.Element}
 */

export const Posts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { getPosts, postsData } = usePosts();
  const [hiddenPosts, setHiddenPosts] = useState(false);

  const { lang } = useLang();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, getPosts, lang]);

  useEffect(() => {
    const isCurrentPathName = location.pathname === '/posts';
    setHiddenPosts(isCurrentPathName);
  }, [location]);

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
              {Object.keys(postsData.posts).map((postKey) =>
                <li key={postKey}>
                  <PostLink
                    postKey={postKey}
                    post={postsData.posts[postKey]}
                  />
                </li>
              )}
            </ul>

            <Link className={classes.button} to='/posts'>
              <span>
                {postsData?.buttonText}
              </span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
