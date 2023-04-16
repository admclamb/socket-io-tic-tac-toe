import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Hero from "../../components/Hero/Hero";
const NotFound = () => {
  return (
    <>
      <Layout
        hero={
          <Hero
            title="404 Page Not Found"
            description="The page you're looking for cannot be found"
          />
        }
      >
        <div className="max-w-4xl mx-auto p-4">
          <Link to="/" className="underline text-indigo-800">
            Back to home
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
