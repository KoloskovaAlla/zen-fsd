import { useEffect } from 'react';
import classes from './Preview.module.scss';
import { useDispatch } from 'react-redux';
import { sliderActions } from 'shared/model/reducers/sliderSlice';
import { setPreviewDetails } from 'shared/model/reducers/previewSlice';

export const Preview = ({ imageData }) => {
  const dispatch = useDispatch();

  const { setSlides } = sliderActions;

  useEffect(() => {
    dispatch(setSlides(imageData));
  }, [imageData, setSlides]);

  const handlePreviewClick = (event) => {
    // dispatch(setIsDarkClicked(false));
    const details = event.currentTarget.getBoundingClientRect();

    const x = details.left;
    const width = details.width;

    const y = details.top;
    const height = details.height;

    const description = imageData.alternate;
    const id = imageData.id;

    dispatch(setPreviewDetails({
      x,
      y,
      width,
      height,
      description,
      id,
    }));
  };

  return (
    <button
      onClick={handlePreviewClick}
      className={classes.preview}
      type='button'
    >
      <img
        src={imageData?.source}
        alt={imageData?.alternate}
      />
    </button>
  );
};
