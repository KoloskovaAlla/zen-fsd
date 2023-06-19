import { Link } from '../Link';
import classes from './Column.module.scss';

/**
  * @typedef {import('./types').ColumnProps} Props
  * @typedef {import('react').ReactElement} ReactElement  
  * @type {({column}: Props) => ReactElement}
  */

export const Column = ({ column }) => {
  const { title, links } = column; 

  return (
    <li>
      {title && <h3 className={classes.title}>{title.content}</h3>}  
      {links?.length > 0 && (
        <ul className={classes.list}>
          {links.map((link, index) =>
            <li
              className={classes.item}
              key={index}
            >
              <Link link={link} />
            </li>
          )}
        </ul>
      )}
    </li>
  );
};
