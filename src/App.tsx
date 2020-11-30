import React from "react";

import styles from "./App.module.css";

/** App is the root component */
const App = () => {
  const rows = 10;
  const cols = 10;
  return (
    <div className={styles.wrapper}>
      <header>this is the header</header>
      <main
        className={styles.main}
        style={{ "--rows": rows, "--cols": cols } as React.CSSProperties}
      >
        {[...Array(rows)].map((_, xIndex) =>
          [...Array(cols)].map((_, yIndex) => (
            <div key={`x${xIndex}y${yIndex}`}>
              ({xIndex}, {yIndex})
            </div>
          ))
        )}
      </main>
      <footer>this is the footer</footer>
    </div>
  );
};

export default App;
