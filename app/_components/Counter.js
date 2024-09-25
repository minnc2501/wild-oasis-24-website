"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);

  return (
    <>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}
