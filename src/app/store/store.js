import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langReducer,
  themeReducer,
  modalReducer,
  reviewReducer,
  sliderReducer,
  currentPageReducer
} from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  reviewReducer,
  sliderReducer,
  currentPageReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
