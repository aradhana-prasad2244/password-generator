import React, { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="p-10 w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-gray-800 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input
          className="outline-none w-full py-1 px-3"
          type="text"
          placeholder="Password"
          value={password}
          readOnly
        />
        <button className="bg-blue-600 text-white px-2">Copy</button>
      </div>
      <div className="flex items-center gap-x-2 text-orange-500">
        <input
          onChange={(e) => {
            setLength(e.target.value);
          }}
          className="cursor-pointer"
          type="range"
          min={6}
          max={100}
          value={length}
          name=""
          id=""
        />
        <label htmlFor="Length">Length: {length}</label>

        <div className="flex flex-center gap-x-2">
          <input
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            type="checkbox"
            defaultChecked={numberAllowed}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex flex-center gap-x-2">
          <input
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            type="checkbox"
            defaultChecked={charAllowed}
            name=""
            id=""
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
