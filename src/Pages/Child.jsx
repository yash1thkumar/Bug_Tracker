import { useState } from "react";

export function Child({ ParentDataHandle }) {
  const [count, setCount] = useState(33);

  function handlData() {
    ParentDataHandle(count);
  }
  return (
    <>
      <h1>{count}</h1>

      <button onClick={handlData}>Click to send data to parent</button>
    </>
  );
}
