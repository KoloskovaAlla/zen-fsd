import classes from './Footer.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useColumns, useInfo } from 'shared/model/hooks';
import { Column, Developer } from './ui';
import { IconLogoFooter } from 'shared/icons';

/**
 * @function Footer
 * @returns {JSX.Element}
 */

export const Footer = () => {
  const dispatch = useDispatch();
  const { getColumns, columns } = useColumns();
  const { getInfo, info } = useInfo();

  useEffect(() => {
    dispatch(getColumns());
    dispatch(getInfo());
  }, [dispatch, getColumns, getInfo]);

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {columns.length > 0 && (
          <ul className={classes.columns}>
            {columns.map(({ title, links }, index) =>
              <Column
                key={index}
                column={{ title, links }}
              />
            )}
          </ul>
        )}

        <div className={classes.info}>
          <div className={classes.logo}>
            <IconLogoFooter />
          </div>

          {info?.texts.length > 0 && (
            info.texts.map((text, index) =>
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            )
          )}

          {info && <Developer developer={info?.developer} />}
        </div>
      </div>
    </footer>
  );
};
