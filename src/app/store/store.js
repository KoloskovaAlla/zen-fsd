import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  pageReducer
} from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  pageReducer
});

export const store = configureStore({
  reducer: rootReducer
});
