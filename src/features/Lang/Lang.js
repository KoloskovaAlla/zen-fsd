import classes from './Lang.module.scss';
import { useDispatch } from 'react-redux';
import { useLang } from 'shared/model/hooks';
import { Select } from 'shared/ui';

/** @typedef {import('react').ReactElement} Element */

/**
 * @function Lang 
 * @returns {Element}
 */

export const Lang = () => {
  const dispatch = useDispatch();

  const { lang, languages, setLang } = useLang(); 
   
  const handleLangChange = ({ target: { value } }) => dispatch(setLang(value));

  return (
    <>
      {languages.length > 0 && (
        <div className={classes.lang}>
          <Select
            className={classes.select}
            options={languages}
            onChange={handleLangChange}
            value={lang}
          />
        </div>
      )}
    </>
  )
};
