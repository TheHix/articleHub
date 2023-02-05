import React, { useState } from "react";
import styles from "./counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1 className={styles.btnGgdsgGdfsgdfg}>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
};


export default Counter;
