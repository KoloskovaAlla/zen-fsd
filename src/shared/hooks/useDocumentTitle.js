import { useEffect } from 'react';

/**
 * @function useDocumentTitle
 * @param {string} title
 * @returns {void}
 */


export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
