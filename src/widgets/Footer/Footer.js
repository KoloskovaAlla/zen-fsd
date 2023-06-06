import classes from './Footer.module.scss';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import { useLang } from 'shared/model/hooks';
import { useLists } from 'shared/model/hooks';
import { Column } from './ui';
import { IconLogoFooter } from 'shared/icons';
import {useDispatch} from 'react-redux';

export const Footer = () => {
  const { getLists, lists } = useLists();
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(getLists());
  }, [dispatch, getLists]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const url = `${API_BASE_URL}/${lang}/lists.json`;
  //       const response = await fetch(url);

  //       if (!response.ok) throw new Error('Data not received');

  //       const data = await response.json();
  //       setData(data);
  //     }
  //     catch (error) {
  //       console.error(error);
  //       setError(error);
  //     }
  //   })();
  // }, [lang, setError]);

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {lists && (
          <ul className={classes.columns}>
            {lists.length > 0 && (
              lists.map((column, index) =>
                <Column
                  key={index}
                  details={{ title: column.title, links: column.links }}
                />)
            )}
          </ul>
        )}

        {/* <div className={classes.info}>
          <div className={classes.logo}>
            <IconLogoFooter />
          </div>

          {data?.infoData?.texts?.length > 0 && (
            data.infoData.texts.map((text, index) =>
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            )
          )}
          <a className={classes.developer} href={data?.infoData?.developer?.url}>
            <img
              src={data?.infoData?.developer?.content?.image?.source}
              alt={data?.infoData?.developer?.content?.image?.alternate}
            />
          </a>
        </div> */}
      </div>
    </footer>
  );
};