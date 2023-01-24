import { Form } from 'features/Form';
import { Title } from 'shared/ui/Title';
import { useEffect, useState } from 'react';
import API_BASE_URL from 'constants';

export const Modal = () => {
  const lang = 'en';
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
    fetch(`${API_BASE_URL}/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch();
  }, [lang]);

  return (
    <div>
      {/* <Title className={classes.title} priority={title.priority}>
        {title.content}
      </Title> */}
      <Form />
    </div>
  );
};
