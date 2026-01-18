import React from "react";
import TopLoader from "react-top-loader"; // Import TopLoader component

const Loader = ({ progress }) => {
  return (
    <TopLoader
      show={progress < 100}
      progress={progress / 100}
      thickness={5}
      color="#4caf50"
      backgroundColor="transparent"
    />
  );
};

export default Loader;

