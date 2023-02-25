import {classNames} from 'shared/lib'
import { Link } from '../Link'
import classes from './Column.module.scss'

export const Column = ({ details }) => {  
  const { title, links } = details

  return (
    <li className={classNames.column}>
      {title && <h3 className={classes.title}>{title.content}</h3>}

      {links?.length > 0 && (
        <ul className={classes.list}>
          {links.length > 0 && (
            links.map((link, index) =>
              <li className={classes.item}>
                <Link link={link} key={index}/>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};
