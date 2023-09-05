import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCurrentPage, usePosts } from 'shared/model/hooks';

/** 
 * @function Posts
 * @returns {JSX.Element}
 */

export const Posts = () => {
  const [hiddenPosts, setHiddenPosts] = useState(false);
  const { currentPage } = useCurrentPage();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData());
  }, [dispatch]);

  const { fetchPostsData, postsData, } = usePosts();

  useEffect(() => {
    setHiddenPosts(currentPage === 'postsPage');
  }, [currentPage]);

  return (
    <div>
      {!hiddenPosts && postsData && (
        <section className={classes.posts}>
          <div className={classes.wrapper}>
            {postsData.title && <h2 className={classes.title}>{postsData?.title.content}</h2>}

            <ul className={classes.list}>
              {Object.keys(postsData).map((postKey) => {
                const post = postsData[postKey];
                console.log(post)
                return (
                  <li key={postKey}>
                    <Link className={classes.post} to={`/posts/${postKey}`}>
                      <button className={classes.image}>
                        <img src={post?.image?.source} alt='alternate img' />
                      </button>
                      <div className={classes.body}>
                        <button className={classes.titlePost}>{post.title}</button>
                        <div className={classes.article}>{post?.article?.slice(0, 50)}...</div>
                        <button className={classes.link}>Read more...</button>
                      </div>
                    </Link>
                  </li>
                );
              })}
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
