import classes from './Footer.module.scss';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import { useLang } from 'shared/model/hooks';
import { Column } from './ui';

export const Footer = () => {
  const { lang, setLang } = useLang();
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/footer.json`;
        const response = await fetch(url);

        if (!response.ok) throw new Error('Data not received');

        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
        setError(error);
      }
    })();
  }, [lang]); 

  return (
    <footer className={classes.footer}>   
      <div className={classes.wrapper}>
      {data && (
        <ul className={classes.columns}>
          {data?.columns.length > 0 && (
            data.columns.map((column, index) =>
              <Column
                key={index}             
                details={{ title: column.title, links: column.links }}                         
              />)
          )}
        </ul>
      )}
      </div>
    </footer>
  );
};