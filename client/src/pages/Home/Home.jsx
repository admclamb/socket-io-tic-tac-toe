import React, { useState } from "react";
import Layout from "../../layout/Layout";
import NameInput from "../../components/NameInput/NameInput";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout hero={<Hero title="Online Tic-Tac-Toe" />}>
      <section className="max-w-4xl mx-auto flex flex-col gap-5 py-6">
        <div className="flex justify-center items-center gap-3">
          <Link
            to="/room"
            className="text-center py-2 px-3 text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white active:text-white active:bg-neutral-800 duration-200 ease-out rounded w-32"
          >
            Create Room
          </Link>
          <Link
            to="/join"
            className="text-center py-2 px-3 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 duration-200 ease-out text-white rounded w-32"
          >
            Join Game
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
