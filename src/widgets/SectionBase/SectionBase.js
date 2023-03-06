import classes from './SectionBase.module.scss';
import { IconApple, IconGoogle } from 'shared/icons';
import { Preview } from 'features';
import { classNames } from 'shared/lib';

export const SectionBase = ({ data, type, reverse }) => {
  const classNameBody = classNames(
    classes.body,
    {
      [classes.reverse]: reverse,
    },
    []
  );

  const { title } = data;

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classNameBody}>
          {type === 'primary' && <h1 className={classes.title}>{title.content}</h1>}
          {type === 'secondary' && <h2 className={classes.title}>{title.content}</h2>}

          {data.texts?.length > 0 &&
            data.texts.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))}

          <ul className={classes.links}>
            {data.links?.length > 0 &&
              data.links.map((link, index) => (
                <li
                  className={classes.link}
                  key={index}
                >
                  <a href={link.url && link.url}>
                    {link.name === 'apple'
                      ? <IconApple />
                      : <IconGoogle />
                    }
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {data.image && <Preview imageData={data.image} />}
      </div>
    </section>
  );
};
