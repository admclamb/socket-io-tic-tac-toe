import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero/Hero";
import RoomInput from "../../components/RoomInput/RoomInput";
const Join = () => {
  const [roomName, setRoomName] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const joinRoom = async (event) => {
    try {
      setIsJoining(true);
      event.preventDefault();

      console.log("JOINING", roomName);
    } catch (err) {
    } finally {
      setIsJoining(false);
    }
  };
  return (
    <Layout hero={<Hero title="Join Game" />}>
      <div className="max-w-4xl mx-auto p-4">
        <RoomInput
          roomName={roomName}
          setRoomName={setRoomName}
          joinRoom={joinRoom}
        />
        {isJoining && <p>Joining...</p>}
      </div>
    </Layout>
  );
};

export default Join;
