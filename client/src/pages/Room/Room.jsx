import React, { useEffect, useState } from "react";
import { socket } from "../../socket";
import Layout from "../../layout/Layout";
import NameInput from "../../components/NameInput/NameInput";
import Game from "../../components/Game/Game";

const Room = () => {
  const [playerName, setPlayerName] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <section className="max-w-4xl mx-auto flex flex-col gap-5 py-6">
          {/* <NameInput setName={setPlayerName} />
          {playerName && (
            <div>
              <h4 className="text-lg font-semibold">Your Name</h4>
              <p>{playerName}</p>
            </div>
          )}
          <button className="text-center py-2 px-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 duration-200 ease-out text-white rounded w-36">
            Generate Game
          </button> */}
          <p>State: {"" + isConnected}</p>
          <Game />
        </section>
      </div>
    </Layout>
  );
};

export default Room;
