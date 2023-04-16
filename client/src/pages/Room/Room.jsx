import React, { useState } from "react";
import Layout from "../../layout/Layout";
import NameInput from "../../components/NameInput/NameInput";

const Room = () => {
  const [playerName, setPlayerName] = useState("");
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <section className="max-w-4xl mx-auto flex flex-col gap-5 py-6">
          <NameInput setName={setPlayerName} />
          {playerName && (
            <div>
              <h4 className="text-lg font-semibold">Your Name</h4>
              <p>{playerName}</p>
            </div>
          )}
          <button className="text-center py-2 px-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 duration-200 ease-out text-white rounded w-36">
            Generate Game
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Room;
