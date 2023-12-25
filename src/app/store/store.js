import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  postsReducer,
  langsReducer,
  themeReducer,
  orderReducer,
  homePageReducer,
  clientsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
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
  homePageReducer,
  clientsReducer,
  postsReducer,
  navReducer,
  columnsReducer,
  infoReducer,
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
