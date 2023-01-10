export const scrollToSection = (sectionName) => {
  if (!sectionName) return;

  const $header = document.querySelector("#header");
  const headerHeight = $header.offsetHeight;
  const $section = document.querySelector(`#${sectionName}`);

  const sectionTopPosition = $section.offsetTop;
  const targetTopPosition = sectionTopPosition - headerHeight;

  let currentTopPosition = window.pageYOffset;
  let timerID;

  const scrollToTop = () => {
    if (currentTopPosition > targetTopPosition) {
      console.log(currentTopPosition);
      window.scrollTo(0, currentTopPosition);
      currentTopPosition -= 70;
      timerID = setTimeout(scrollToTop, 30);
    } else {
      window.scrollTo(0, targetTopPosition);
      clearTimeout(timerID);
    }
  };

  const scrollToBottom = () => {
    if (currentTopPosition < targetTopPosition) {
      window.scrollTo(0, currentTopPosition);
      currentTopPosition += 70;
      timerID = setTimeout(scrollToBottom, 30);
    } else {
      window.scroll(0, targetTopPosition);
      clearTimeout(timerID);
    }
  };

  if (currentTopPosition > targetTopPosition) scrollToTop();
  if (currentTopPosition < targetTopPosition) scrollToBottom();
};
