import React, { useState } from "react";

const NameInput = ({ setName }) => {
  const [currName, setCurrName] = useState("");
  const changeName = ({ target: { value } }) => {
    setCurrName(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setName(currName);
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <label htmlFor="name" className="text-center">
        Enter Your Name
      </label>
      <input
        value={currName}
        onChange={changeName}
        type="text"
        id="name"
        placeholder="Enter your name..."
        className="p-2 rounded border"
      />
      <div className="flex justify-center items-center">
        <button
          className="py-2 px-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 duration-200 ease-out text-white rounded w-32"
          type="submit"
        >
          Enter
        </button>
      </div>
    </form>
  );
};

export default NameInput;
