import classes from './PostPreview.module.scss';
import { Link } from 'react-router-dom';


export const PostPreview = ({ details }) => {
  const { image, title, key } = details;

  return (
    <Link to={`/posts/${key}`}>
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
