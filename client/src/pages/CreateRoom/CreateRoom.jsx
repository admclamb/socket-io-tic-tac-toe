import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero/Hero";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const [gameRoom, setGameRoom] = useState("");
  const navigate = useNavigate();
  const updateRoomName = ({ target: { value } }) => {
    setGameRoom(value);
  };

  const createGameRoom = () => {
    navigate(`/room/${gameRoom}`);
  };
  return (
    <Layout hero={<Hero title="Create a Room" />}>
      <div className="max-w-4xl mx-auto p-4">
        <form className="flex flex-col gap-3" onSubmit={createGameRoom}>
          <label htmlFor="room">Enter a room id</label>
          <input
            type="text"
            id="room"
            value={gameRoom}
            onChange={updateRoomName}
            placeholder="Enter a room name..."
            className="p-2 rounded border"
          />
          <div className="flex justify-center items-center">
            <button
              className="py-2 px-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 duration-200 ease-out text-white rounded w-32"
              type="submit"
            >
              Create Game
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateRoom;
