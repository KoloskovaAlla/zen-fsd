import { useEffect, useState } from 'react';
import { API_BASE_URL } from 'shared/constants/api';
import classes from './Modal.module.scss';
import { IconClose } from 'shared/icons';
import { useLang } from 'shared/model/hooks';

export const Modal = () => {
  const { lang } = useLang();
  const [data, setData] = useState(null);
   const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${API_BASE_URL}/${lang}/modal.json`;
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
    <div className={classes.modal}>
      <button className={classes.close} >    
        <IconClose />
      </button>   

      {data && <h3 className={classes.title}> {data.title.content}</h3>}      
    </div>
  );
};
