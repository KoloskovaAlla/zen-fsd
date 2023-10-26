import classes from './PostPage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePost, useLang, useDocumentTitle } from 'shared/hooks';

/**
 * @function PostPage
 * @returns {JSX.Element | null}
 */

const PostPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { key } = params;
  const postState = usePost();
  const { lang } = useLang();
  const title = postState?.post?.title
    ? `ZEN | ${postState.post.title}`
    : 'ZEN'

  useDocumentTitle(title);

  const isMediaTypeImage = postState.post?.media?.type === 'image';
  const isMediaTypeVideo = postState.post?.media?.type === 'video';

  useEffect(() => {
    dispatch(postState.getPost(key));
  }, [lang, key]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {postState.post && (
        <div className={classes.postPage}>
          <div className={classes.header}>
            {isMediaTypeImage && (
              <div className={classes.image}>
                <img
                  src={postState.post.media.src}
                  alt={postState.post.media.alternate}
                />
              </div>
            )}
            {isMediaTypeVideo && (
              <div className={classes.video}>
                <video controls>
                  <source
                    src={postState.post.media.src}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          <div className={classes.body}>
            <h1 className={classes.title}>{postState?.post?.title}</h1>
            {postState?.post?.texts.map((text, index) => (
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
