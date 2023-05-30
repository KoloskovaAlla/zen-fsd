import { useDispatch } from 'react-redux';
import { useLang } from 'shared/model/hooks';
import { Select } from 'shared/ui';
import classes from './Lang.module.scss';

export const Lang = () => {
  const {
    lang,
    languages,
    setLang,
  } = useLang();

  const dispatch = useDispatch();
  // @ts-ignore
  const onLangChange = (value) => dispatch(setLang(value));

  return (
    <>
      {languages?.length > 0 && (
        <div className={classes.language}>
          <Select
            options={languages}
            className={classes.select}
            onChange={({ target: { value } }) => onLangChange(value)}
            value={lang}
          />
        </div>
      )}
    </>
  )
};
