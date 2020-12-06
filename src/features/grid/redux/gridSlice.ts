import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridState } from "./gridTypes";

const initialState: GridState = {
  numRows: 10,
  numCols: 10,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setRows: (state: GridState, action: PayloadAction<number>) => {
      console.log({ state });
      state.numRows = action.payload;
    },
    setCols: (state: GridState, action: PayloadAction<number>) => {
      state.numCols = action.payload;
    },
  },
});

export const { setRows, setCols } = gridSlice.actions;

export default gridSlice.reducer;
