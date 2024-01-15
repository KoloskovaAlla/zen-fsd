import classes from './Links.module.scss';
import { IconApple, IconGoogle } from 'shared/icons';

/**
 * @typedef {import('./types').LinksProps} LinksProps
 * @typedef {import('./types').Link} Link
 */

/**
 * @function Links
 * @param {LinksProps} props
 * @returns {null | JSX.Element}
 */

export const Links = (props) => {
  const icon = {
    apple: <IconApple />,
    google: <IconGoogle />,
  };

  if (!props.links.length) return null;

  return (
    <ul className={classes.links}>
      {(props.links.map((/** @type{Link} */ link) => (
        <li className={classes.link}
          key={link?.name}
        >
          <a href={link?.url}>
            {icon[link?.name]}
          </a>
        </li>
      )))}
    </ul>
  );
};
