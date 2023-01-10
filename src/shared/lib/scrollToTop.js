export const scrollToTop = () => {
  let currentTopPosition = window.pageYOffset;
  let timerID;

  const scroll = () => {
    if (currentTopPosition > 0) {
      window.scrollTo(0, currentTopPosition);
      currentTopPosition -= 100;
      timerID = setTimeout(scroll, 30);
    } else {
      window.scrollTo(0, 0);
      clearTimeout(timerID);
    }
  };
  scroll();
};
