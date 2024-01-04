import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDownloadPage, useLang, useDocumentTitle } from 'shared/hooks';
import { SectionBase } from 'widgets';

/**
 * @function PostPage
 * @returns {null | JSX.Element}
 */

const DownloadPage = () => {
  const dispatch = useDispatch();
  const downloadPageState = useDownloadPage();
  const { lang } = useLang();
  const title = lang === 'en'
    ? 'ZEN | Download'
    : 'ZEN | Скачать приложения';

  useDocumentTitle(title);

  useEffect(() => {
    dispatch(downloadPageState.getDownloadPage());
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!downloadPageState) return null;
  return (
    <main>
      {downloadPageState?.downloadPage?.intro && (
        <SectionBase
          data={downloadPageState?.downloadPage?.intro}
          type="primary"
          reverse={false}
        />
      )}
      {downloadPageState?.downloadPage?.core && (
        <SectionBase
          data={downloadPageState?.downloadPage?.core}
          type="secondary"
          reverse
        />
      )}
      {downloadPageState?.downloadPage?.final && (
        <SectionBase
          data={downloadPageState?.downloadPage?.final}
          type="secondary"
          reverse={false}
        />
      )}
    </main>
  );
};

export default DownloadPage;
