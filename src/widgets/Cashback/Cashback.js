import classes from './Cashback.module.scss';
export const Cashback = ({ data }) => {
  const { title } = data;
  const handleOrderClick = () => {}

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
