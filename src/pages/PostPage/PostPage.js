import classes from './PostPage.module.scss';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePost, useLang, useDocumentTitle } from 'shared/hooks';

/**
 * @function PostPage
 * @returns {JSX.Element | null}
 */

const PostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { key } = params;
  const postState = usePost();
  const { post, isPostLoading, postErrorMessage } = postState;
  const { lang } = useLang();
  const title = post?.title
    ? `ZEN | ${post.title}`
    : 'ZEN';

  useDocumentTitle(title);

  const isMediaTypeImage = post?.media?.type === 'image';
  const isMediaTypeVideo = post?.media?.type === 'video';

  useEffect(() => {
    dispatch(postState.getPost(key));
  }, [lang, key]);

  // useEffect(() => {
  //   if (postErrorMessage !== '') navigate('/posts');
  // }, [post, navigate, isPostLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) return null;
  return (
    <div className={classes.postPage}>
      <div className={classes.header}>
        {isMediaTypeImage && (
          <div className={classes.image}>
            <img
              src={post?.media?.src}
              alt={post?.media?.alternate}
            />
          </div>
        )}
        {isMediaTypeVideo && (
          <div className={classes.video}>
            <video controls>
              <source
                src={post?.media?.src}
                type="video/mp4"
              />
            </video>
          </div>
        )}
      </div>
      <div className={classes.body}>
        <h1 className={classes.title}>{post?.title}</h1>
        {post?.texts?.map((text, index) => (
          <p
            className={classes.copy}
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
