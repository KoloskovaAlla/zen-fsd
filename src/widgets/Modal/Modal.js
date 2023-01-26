import { OrderForm } from 'features/OrderForm';
import { useEffect, useState } from 'react';
// import API_BASE_URL from 'constants';
import classes from './Modal.module.scss';
import { ButtonIcon } from 'shared/ui';
import { IconClose } from 'shared/icons';

export const Modal = () => {
  const lang = 'en';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      // fetch(`${API_BASE_URL}/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.modal);
        console.log(data.modal.title.content);
      })
      .catch();
  }, [lang]);

  return (
    <div className={classes.modal}>
      {/* <ButtonIcon className={classes.close} icon={<IconClose />} /> */}
      <button className={classes.close}>{<IconClose />}</button>

      {data && <h3 className={classes.title}> {data.title.content}</h3>}
      <OrderForm />
    </div>
  );
};
