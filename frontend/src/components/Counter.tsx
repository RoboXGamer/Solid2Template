import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0, { name: "counter" });

  return (
    <button type="button" onClick={() => setCount((value) => value + 1)}>
      Count: {count()}
    </button>
  );
}
