import { useEffect } from 'react';
import classes from './Preview.module.scss';
import { useDispatch } from 'react-redux';
import { usePreview } from 'shared/hooks';


export const Preview = ({ imageDetails }) => {
  const dispatch = useDispatch();

  const { setPreviewDetails } = usePreview();

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
