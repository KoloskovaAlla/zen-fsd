import { useEffect } from 'react';
import classes from './Preview.module.scss';
import { useDispatch } from 'react-redux';
import { useSlider, usePreview } from 'shared/model/hooks';

/** 
 * @param {object} param
 * @returns {ReactElement}
 */

export const Preview = ({ imageDetails }) => {
  const dispatch = useDispatch();
  const { sliderActions } = useSlider();
  const { setSlides } = sliderActions;
  const { setPreviewDetails } = usePreview();

  useEffect(() => {
    dispatch(setSlides(imageDetails));
  }, [imageDetails, setSlides]);

  const handlePreviewClick = (event) => {
    const details = event.currentTarget.getBoundingClientRect();

    const x = details.left;
    const width = details.width;

    const y = details.top;
    const height = details.height;

    const description = imageDetails.alternate;
    const id = imageDetails.id;

    dispatch(setPreviewDetails({
      x,
      y,
      width,
      height,
      description,
      id,
    }));
  };

  console.log(typeof (
    <button
      onClick={handlePreviewClick}
      className={classes.preview}
      type='button'
    >
      <img
        src={imageDetails?.source}
        alt={imageDetails?.alternate}
      />
    </button>
  ))

  return (
    <button
      onClick={handlePreviewClick}
      className={classes.preview}
      type='button'
    >
      <img
        src={imageDetails?.source}
        alt={imageDetails?.alternate}
      />
    </button>
  );
};