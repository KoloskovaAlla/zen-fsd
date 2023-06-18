import { Link } from '../Link';
import classes from './Column.module.scss';

export const Column = ({ details }) => {
  const { title, links } = details; 

  return (
    <li>
      {title && <h3 className={classes.title}>{title.content}</h3>}     

      {links?.length > 0 && (
        <ul className={classes.list}>
          {links.length > 0 && (
            links.map((link, index) =>
              <li
                className={classes.item}
                key={index}
              >
                <Link
                  link={link}
                />
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};
