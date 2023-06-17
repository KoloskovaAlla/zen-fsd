import classes from './Developer.module.scss';

/**
  * @typedef {import('./types').DeveloperProps} Props
  * @typedef {import('react').ReactElement} ReactElement  
  * @type {({developer}: Props) => ReactElement}
  */
export const Developer = ({developer}) => {
  const { url } = developer;
  const { source, alternate }  = developer.content.image;
  return (
    <>
      {url && (
        <a className={classes.developer} href={url}>
          {source && alternate && (
            <img src={source} alt={alternate} />            
          )}
        </a>
      )}
    </>
  )
};
