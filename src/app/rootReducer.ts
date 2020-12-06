import { combineReducers } from "@reduxjs/toolkit";
import gridSlice from "../features/grid/redux/gridSlice";

const rootReducer = combineReducers({
  grid: gridSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
