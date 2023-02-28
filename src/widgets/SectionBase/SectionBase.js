import classes from './SectionBase.module.scss';
import { classNames } from 'utils/helpers';

export const SectionBase = ({ data, reverse, type }) => {
  const classNameBody = classNames(
    classes.body,
    {
      [classes.reverse]: reverse,
    },
    []
  );

  const { title, name } = data;

  return (
    <section id={name} className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classNameBody}>

          {type === "primary" && <h1 className={classes.title}>data.title</h1>}
          {type === "secondary" && <h2 className={classes.title}>data.title</h2>}


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
                <li className={classes.link}>
                  <a href={link.url && link.url}>
                    {link.name === 'apple'
                      ? <AppleIcon />
                      : <GoogleIcon />
                    }
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* {data.image && (
          <Image
            className={classes.image}
            imageData={data.image}
          />)
        } */}

        <Preview imageData={data.image} />
      </div>
    </section>
  );
};
