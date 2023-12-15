import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { usePosts, useLang } from 'shared/hooks';
import { PostLink } from './ui/PostLink';

/**
 * @function Posts
 * @returns {null | JSX.Element}
 */

export const Posts = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const postsState = usePosts();
  const [hiddenPosts, setHiddenPosts] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    dispatch(postsState.getPosts());
  }, [dispatch, postsState.getPosts, lang]);

  useEffect(() => {
    const isCurrentPathName = location.pathname === '/posts';
    setHiddenPosts(isCurrentPathName);
  }, [location]);

  if (hiddenPosts || !postsState) return null;
  return (
    <div>
      <section className={classes.posts}>
        <div className={classes.wrapper}>
          {postsState?.postsSection?.title && (
            <h2 className={classes.title}>
              {postsState?.postsSection?.title.content}
            </h2>
          )}

          <ul className={classes.list}>
            {postsState?.postsSection?.posts && (Object.keys(postsState?.postsSection?.posts).map((postKey) =>
              <li key={postKey}>
                <PostLink
                  postKey={postKey}
                  post={postsState?.postsSection?.posts[postKey]}
                />
              </li>
            ))}
          </ul>

          <Link className={classes.button} to='/posts'>
            <span>
              {postsState?.postsSection?.buttonText}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};
