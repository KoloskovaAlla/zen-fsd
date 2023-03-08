import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  pageReducer,
  homePageReducer,
  postsReducer,
  clientsReducer,
} from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  pageReducer,
  homePageReducer,
  clientsReducer, 
  postsReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
