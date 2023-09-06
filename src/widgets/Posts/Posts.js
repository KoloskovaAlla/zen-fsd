import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCurrentPage, usePosts } from 'shared/model/hooks';
import { PostLink } from './ui/PostLink';

/** 
 * @function Posts
 * @returns {JSX.Element}
 */

export const Posts = () => {
  const dispatch = useDispatch();
  const [hiddenPosts, setHiddenPosts] = useState(false);
  const { currentPage } = useCurrentPage();

  const { fetchPostsData, postsData, } = usePosts();
  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch, fetchPostsData]);


  useEffect(() => {
    setHiddenPosts(currentPage === 'postsPage');
  }, [currentPage]);

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
              {Object.keys(postsData).map((postKey) =>
                <li key={postKey}>
                  <PostLink postKey={postKey} post={postsData[postKey]} />
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
