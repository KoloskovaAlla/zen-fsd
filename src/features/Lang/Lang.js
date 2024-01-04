import classes from './Lang.module.scss';
import { useDispatch } from 'react-redux';
import { useLang } from 'shared/hooks';
import { Select } from 'shared/ui';
import { IconArrow } from 'shared/icons';

/**
 * @function Lang
 * @returns {null | JSX.Element}
 */

export const Lang = () => {
  const dispatch = useDispatch();

  const { lang, langs, setLang } = useLang();

  const handleLangChange = ({ target: { value } }) => dispatch(setLang(value));

  return (
    <>
      {langs?.length > 0 && (
        <label className={classes.lang}>
          <Select
            className={classes.select}
            options={langs}
            value={lang}
            onChange={handleLangChange}
            emptyOption={false}
          />
          <IconArrow />
        </label>
      )}

    </>
  );
};
