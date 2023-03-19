import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useCurrentPage, useLang, usePosts } from 'shared/model/hooks';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Posts = () => {
  const { lang } = useLang();
  const [hiddenPosts, setHiddenPosts] = useState(false);
  const { currentPage } = useCurrentPage();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsData(lang));
  }, [lang]);

  const {
    fetchPostsData,
    isLoading,
    postsData,
    errorMessage,
  } = usePosts();

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
              <li>
                <Link className={classes.post} to='/posts/warranty'>
                  <button className={classes.image}>
                    <img
                      src={postsData?.warranty?.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {postsData?.warranty?.title}
                    </button>
                    <div className={classes.article}>
                      {postsData?.warranty?.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/care'>
                  <button className={classes.image}>
                    <img src={postsData?.care?.imageSource} alt='alternate img'></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {postsData?.care?.title}
                    </button>
                    <div className={classes.article}>
                      {postsData?.care?.article.slice(0, 49)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/cashback'>
                  <button className={classes.image}>
                    <img
                      src={postsData?.cashback?.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {postsData?.cashback?.title}
                    </button>
                    <div className={classes.article}>
                      {postsData?.cashback.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
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
