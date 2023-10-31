import classes from './SectionBase.module.scss';
import { Links } from './ui';
import { classNames } from 'shared/lib';

/** @typedef {import('./types').SectionBaseProps} SectionBaseProps */

/**
 * @function SectionBase
 * @param {SectionBaseProps} props
 * @returns {JSX.Element}
 */

export const SectionBase = ({ data, type, reverse }) => {
  const { title, texts, image } = data;

  const bodyClassNames = classNames(classes.body, {
    [classes.reverse]: reverse,
  });

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={bodyClassNames}>
          {type === 'primary' && (
            <h1 className={classes.title}>
              {title.content}
            </h1>
          )}
          {type === 'secondary' && (
            <h2 className={classes.title}>
              {title.content}
            </h2>
          )}

          {texts?.length > 0 && (
            texts.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            )))
          }

          {data?.links && <Links links={data.links} />}
        </div>

        <div className={classes.image}>
          <img
            src={image?.source}
            alt={image?.alternate}
          />
        </div>
      </div>
    </section>
  );
};
