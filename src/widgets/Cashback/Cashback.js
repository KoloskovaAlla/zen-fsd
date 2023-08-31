import classes from './Cashback.module.scss';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/model/hooks';

export const Cashback = ({ data }) => {
  console.log(data)
  const { title } = data;
  const dispatch = useDispatch();
  const { setIsModalActive } = useOrder();

  const handleOrderClick = () => {
    dispatch(setIsModalActive(true));
  }

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <h2 className={classes.title}>{title.content}</h2>

          {data.texts?.length > 0 &&
            data.texts.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))}
          <button
            onClick={handleOrderClick}
            className={classes.button}
            type="button"
          >
            {data?.buttonText}
          </button>

        </div>
      </div>
    </section>
  );
};
