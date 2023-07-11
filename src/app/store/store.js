import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langReducer,
  themeReducer,
  orderReducer,
  previewReducer,
  sliderReducer,
  homePageReducer,
  postsReducer,
  clientsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
  currentPageReducer,
  sendOrderReducer,
} from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  orderReducer,
  previewReducer,
  sliderReducer,
  homePageReducer,
  clientsReducer,
  postsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
  currentPageReducer,
  sendOrderReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
