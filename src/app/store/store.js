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
  dataReducer,
  navReducer,  
  columnsReducer,
  infoReducer,
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
  dataReducer,
  navReducer, 
  columnsReducer,
  infoReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
