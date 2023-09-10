import classes from './Links.module.scss';
import { IconApple, IconGoogle } from 'shared/icons';

export const Links = ({ links }) => {
  return (
    <ul className={classes.links}>
      {links?.length > 0 && (
        links.map((link, index) => (
          <li
            className={classes.link}
            key={index}
          >
            <a href={link?.url && link.url}>
              {link.name === 'apple'
                ? <IconApple />
                : <IconGoogle />
              }
            </a>
              </li>
        ))
      )}
    </ul>
  )
};