import classes from "./Button.module.scss";

export const Button = ({ disabled, buttonText }) => {
  return (
    <button disabled={disabled} type="submit" className={classes.submit}>
      {buttonText}
    </button>
  );
};
