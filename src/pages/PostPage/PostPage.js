import classes from './PostPage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePost, useLang } from 'shared/model/hooks';

/** 
 * @function PostPage
 * @returns {JSX.Element | null}
 */

const PostPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const { key } = params;

  const {
    getPost,
    ...postState
  } = usePost();

  const { post } = postState;

  const { lang } = useLang();

  useEffect(() => {
    dispatch(getPost(key));
  }, [dispatch, getPost, lang, key]); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {post && (
        <div className={classes.postPage}>
          <div className={classes.header}>     
            {post?.media?.type === 'image' && (
              <div className={classes.image}>
                <img
                  src={post.media.src}
                  alt={post.media.alternate}
                />
              </div>
            )}
            {post?.media?.type === 'video' && (
              <div className={classes.video}>
                <video controls>
                  <source 
                    src={post.media.src} 
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>

          <div className={classes.body}>  
            <h1 className={classes.title}>{post?.title}</h1>
            {post?.article?.length > 0 && post.article.map((text, index) => (
              <p 
                className={classes.copy} 
                key={index}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
