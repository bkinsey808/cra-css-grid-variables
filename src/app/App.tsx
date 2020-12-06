import React from "react";

import { Grid } from "../features/grid/components/Grid";
import { GridSize } from "../features/grid/components/GridSize";

import styles from "./App.module.css";

/** App is the root component */
export const App = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        this is the header
        <GridSize />
      </header>
      <main>
        <Grid />
      </main>
      <footer>this is the footer</footer>
    </div>
  );
};

export default App;
