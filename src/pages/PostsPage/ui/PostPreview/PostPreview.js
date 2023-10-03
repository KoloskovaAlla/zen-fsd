import classes from './PostPreview.module.scss';
import { Link } from 'react-router-dom';
import { Preview } from 'features';

export const PostPreview = ({ details }) => {
  const { media, title, key } = details;

  return (
    <Link to={`/posts/${key}`}>
      <div className={classes.postPreview}>
        <div className={classes.header}>        
          
             <div className={classes.image}>
              <img
                src={details?.src}
                alt={details?.alternate}
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
