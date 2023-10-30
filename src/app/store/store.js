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
  sendOrderReducer,
  cashbackReducer,
  carePageReducer,
  cashbackPageReducer,
  warrantyPageReducer,
  postReducer,
  postsPageReducer,
  downloadPageReducer,
  clientsPageReducer,
} from 'shared/reducers';

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
  sendOrderReducer,
  cashbackReducer,
  carePageReducer,
  cashbackPageReducer,
  warrantyPageReducer,
  postReducer,
  postsPageReducer,
  downloadPageReducer,
  clientsPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
