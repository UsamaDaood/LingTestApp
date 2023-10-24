import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers, persistReducer} from 'redux-persist';
//import { user } from './user/userSlice';
import {app} from './app/appSlice';
import {combineReducers} from '@reduxjs/toolkit';
import {leaderBoard} from './transaction/leaderBoardSlice';

const storeConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine all the reducers into one
const rootReducer = combineReducers({
  app,
  leaderBoard,
});

const persistedReducer = persistReducer(storeConfig, rootReducer);

export default persistedReducer;
