import classes from './PostPreview.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const PostPreview = ({ details }) => {
  const { image, title } = details;

  useEffect(() => {
    console.log(details)
  }, [details])

  return (
    <Link to={`/posts/${`заглушка`}`}>
      <div className={classes.postPreview}>
        <div className={classes.header}>

          <div className={classes.image}>
            <img
              src={image?.source}
              alt={image?.alternate}
            />
          </div >
        </div>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.read}>
          <span>Читать</span>
        </div>
      </div>
    </Link>
  );
};
