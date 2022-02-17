import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const YouWin = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <div>
        <h1>Congrats You Win</h1>
      </div>
      <Confetti width={width} height={height} />
    </>
  );
};
