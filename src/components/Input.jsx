import React, { useState } from "react";

const Input = ({ setSearch }) => {
  const [input, setInput] = useState("");
  return (
    <div className="w-full flex p-5">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full p-2"
      />
      <button
        onClick={() => {
          setSearch(input);
          setInput("");
        }}
        className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default Input;
