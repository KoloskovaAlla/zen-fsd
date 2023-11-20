import classes from './Developer.module.scss';

/**
  * @typedef {import('./types').DeveloperProps} Props
  * @typedef {import('react').ReactElement} ReactElement
  * @type {({developer}: Props) => ReactElement}
  */
export const Developer = ({ developer }) => {
  return (
    <>
      {developer?.url && (
        <a className={classes.developer} href={developer?.url}>
          <img src={developer?.content?.image?.source} alt={developer?.content?.image?.alternate} />
        </a>
      )}
    </>
  );
};
