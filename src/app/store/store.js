import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  langsReducer,
  themeReducer,
  orderReducer,
  previewReducer,
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
  langsReducer,
  themeReducer,
  orderReducer,
  previewReducer,
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
