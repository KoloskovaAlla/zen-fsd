import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { langReducer, themeReducer } from 'shared/model/reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
