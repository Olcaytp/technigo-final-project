import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TransactionReducer from "../src/reducers/TransactionReducer";

const reducer = combineReducers({
    transaction: TransactionReducer,
});

export const store = configureStore({
    reducer: reducer,
  });
