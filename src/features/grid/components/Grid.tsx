import { useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";

import styles from "./Grid.module.css";

export const Grid = () => {
  const rows = useSelector((state: RootState) => state.grid.numRows);
  const cols = useSelector((state: RootState) => state.grid.numCols);

  return (
    <main
      className={styles.main}
      style={{ "--rows": rows, "--cols": cols } as React.CSSProperties}
    >
      {[...Array(rows)].map((_, row) =>
        [...Array(cols)].map((_, col) => (
          <div
            className={`row${row} col${col}`}
            key={`x${row}y${col}`}
          >
            ({row}, {col})
          </div>
        ))
      )}
    </main>
  );
};

// darker shade of blue
// #5bc2f4

// lighter shade of blue
// #d0eefc
