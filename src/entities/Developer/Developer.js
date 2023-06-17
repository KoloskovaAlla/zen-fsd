import classes from './Developer.module.scss';

export const Developer = (data) => {
  return (
    <a className={classes.developer} href={data.developer?.url}>
      <img
        src={data?.developer?.content?.image?.source}
        alt={data?.developer?.content?.image?.alternate}
      />
    </a>
  )
};
