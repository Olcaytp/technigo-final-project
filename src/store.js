import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TransactionReducer from "../src/Transaction/TransactionSlice";

const reducer = combineReducers({
    transaction: TransactionReducer,
});

export const store = configureStore({
    reducer: reducer,
  });
