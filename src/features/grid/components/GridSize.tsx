import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";
import { setRows, setCols } from "../redux/gridSlice";

/** inputs for the size of the grid */
export const GridSize = () => {
  const rows = useSelector((state: RootState) => state.grid.numRows);
  const cols = useSelector((state: RootState) => state.grid.numCols);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="number"
        defaultValue={rows}
        onChange={({ target }) => {
          dispatch(setRows(Number(target.value)));
        }}
      />
      <input
        type="number"
        defaultValue={cols}
        onChange={({ target }) => {
          dispatch(setCols(Number(target.value)));
        }}
      />
    </div>
  );
};
