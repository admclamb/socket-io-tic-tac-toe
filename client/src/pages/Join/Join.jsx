import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero/Hero";
import RoomInput from "../../components/RoomInput/RoomInput";
import { useNavigate } from "react-router-dom";
const Join = () => {
  const [roomName, setRoomName] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const navigate = useNavigate();
  const joinRoom = async (event) => {
    try {
      setIsJoining(true);
      event.preventDefault();
      navigate(`/room/${roomName}`);
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
