import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useColumns, useInfo } from 'shared/model/hooks';
import { Column } from './ui';
import { IconLogoFooter } from 'shared/icons';
import classes from './Footer.module.scss';

export const Footer = () => {
  const { getColumns, columns } = useColumns();
  const { getInfo, info } = useInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColumns());
    dispatch(getInfo());
  }, [dispatch, getColumns, dispatch(getInfo())]);

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {columns.length > 0 && (
          <ul className={classes.columns}>
            {columns.map(({ title, links }, index) =>
              <Column
                key={index}
                details={{ title: title, links: links }}
              />
            )}
          </ul>
        )}

        {<div className={classes.info}>
          <div className={classes.logo}>
            <IconLogoFooter />
          </div>

          {info.texts && (
            info.texts.map((text, index) =>
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            )
          )}
          <a className={classes.developer} href={info.developer?.url}>
            <img
              src={info.developer?.content?.image?.source}
              alt={info.developer?.content?.image?.alternate}
            />
          </a>
        </div>}
      </div>
    </footer>
  );
};
