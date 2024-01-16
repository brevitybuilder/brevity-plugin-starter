import clsx from "clsx";
import * as React from "react";
import * as styles from "./styles.module.css";

export function Counter(props: React.HTMLAttributes<HTMLDivElement>) {
  const [counter, setCounter] = React.useState(0);

  return (
    <div
      className={clsx("counter", styles.counter, props.className)}
      {...props}
    >
      <h1>My Counter</h1>
      <span className={clsx("counter__output", styles.counter__output)}>
        {counter}
      </span>
      <div className={clsx("btn__container", styles.btn__container)}>
        <button
          className={clsx("control__btn", styles.control__btn)}
          onClick={() => setCounter((i) => i + 1)}
        >
          +
        </button>
        <button
          className={clsx("control__btn", styles.control__btn)}
          onClick={() => setCounter((i) => i - 1)}
        >
          -
        </button>
        <button
          className={clsx("reset", styles.reset)}
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
