import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCurrentPage, useLang, usePosts } from 'shared/model/hooks';

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

  useEffect(() => {
    if (postsData) console.log(postsData.warranty)
  }, [postsData]);

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
