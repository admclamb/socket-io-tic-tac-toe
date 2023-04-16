import React, { useState } from "react";

const RoomInput = ({ roomName, setRoomName, joinRoom }) => {
  const changeRoomName = ({ target: { value } }) => {
    setRoomName(value);
  };

  return (
    <form onSubmit={joinRoom} className="flex flex-col gap-3">
      <label htmlFor="room-name" className="text-center">
        Enter Room Name
      </label>
      <input
        value={roomName}
        onChange={changeRoomName}
        type="text"
        id="room-name"
        placeholder="Enter room name..."
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

export default RoomInput;
