import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("initial render");

    return () => console.log("unmount hook");
  }, []);

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <h2>Use Effect</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </>
  );
};

export default UseEffectExample;
