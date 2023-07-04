import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  homePageReducer,
  postsReducer,
  clientsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
  currentPageReducer,
} from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  previewReducer,
  sliderReducer,
  homePageReducer,
  clientsReducer,
  postsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
  currentPageReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
