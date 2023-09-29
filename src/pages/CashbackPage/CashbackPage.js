import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCashbackPage } from 'shared/model/hooks';
import { SectionBase } from 'widgets';

/** 
 * @function CashbackPage
 * @returns {JSX.Element | null}
 */

const CashbackPage = () => {
  const dispatch = useDispatch();
  const {
    getCashbackPage,
    ...cashbackPageState
  } = useCashbackPage();

  const { cashbackPage } = cashbackPageState;

  useEffect(() => {
    dispatch(getCashbackPage());
  }, [dispatch, getCashbackPage]);

  useEffect(() => {
    if (cashbackPage) console.log(cashbackPage.intro);
  }, [cashbackPage]);

  if (!cashbackPage) return null;
  return (
    <main>
      {cashbackPage?.intro && (
        <SectionBase
          data={cashbackPage.intro}
          type="primary"
          reverse={false}
        />
      )}
      {cashbackPage?.core && (
        <SectionBase
          data={cashbackPage.core}
          type="secondary"
          reverse
        />
      )}
      {cashbackPage?.final && (
        <SectionBase
          data={cashbackPage.final}
          type="secondary"
          reverse={false}
        />
      )}
    </main>
  );
};

export default CashbackPage;
