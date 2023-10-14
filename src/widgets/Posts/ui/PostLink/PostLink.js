import classes from './PostLink.module.scss';
import { Link } from 'react-router-dom';
import { trimString } from 'shared/lib';

/**
 
 * @typedef {import('react').ReactElement} Element
 */

/** 
 * @function Form
 * @param {any} props
 * @returns {Element}
 */

export const PostLink = ({ postKey, post }) => {
  const fullPostText =  post.article.join(' ');
  const previewPostText = trimString(fullPostText, 40);   
  
  return (
    <Link className={classes.post} to={`/posts/${postKey}`}>
      <button className={classes.image}>
        <img src={post?.image?.source} alt='alternate img' />
      </button>
      <div className={classes.body}>
        <button className={classes.titlePost}>{post.title}</button>
        <div className={classes.article}>{`${previewPostText}...`}</div>
        <button className={classes.link}>Read more...</button>
      </div>
    </Link>
  );
};
