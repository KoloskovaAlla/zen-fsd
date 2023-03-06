import classes from './Blog.module.scss';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import { useLang } from 'shared/model/hooks';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Blog = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { lang } = useLang();
  const [hiddenPosts, setHiddenPosts] = useState(false);
  const { currentPage } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/posts.json`;
        const response = await fetch(url);

        if (!response.ok) throw new Error('Data not received');

        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [lang, setError]);

  useEffect(() => {
    setHiddenPosts(currentPage === 'postsPage');
  }, [currentPage]);

  return (
    <div>
      {!hiddenPosts && data && (
        <section className={classes.posts}>
          <div className={classes.wrapper}>
            {data.title && <h2 className={classes.title}>{data?.title.content}</h2>}

            <ul className={classes.list}>
              <li>
                <Link className={classes.post} to='/posts/warranty'>
                  <button className={classes.image}>
                    <img
                      src={data?.warranty?.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {data?.warranty?.title}
                    </button>
                    <div className={classes.article}>
                      {data?.warranty?.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/care'>
                  <button className={classes.image}>
                    <img src={data?.care?.imageSource} alt='alternate img'></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {data?.care?.title}
                    </button>
                    <div className={classes.article}>
                      {data?.care?.article.slice(0, 49)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/cashback'>
                  <button className={classes.image}>
                    <img
                      src={data?.cashback?.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {data?.cashback?.title}
                    </button>
                    <div className={classes.article}>
                      {data?.cashback.article.slice(0, 50)}...
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
                {data?.buttonText}
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
