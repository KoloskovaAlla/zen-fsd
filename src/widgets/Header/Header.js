import { useEffect, useState } from 'react';

const HeaderPage = () => {
    const lang='en'
    const [data, setData] = useState(null)

    useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/header.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch();
  }, [lang]);


}

export default HeaderPage