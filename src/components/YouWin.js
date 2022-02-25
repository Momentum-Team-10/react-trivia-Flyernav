import React from "react";
import Confetti from "react-confetti";
// import useWindowSize from "react-use/lib/useWindowSize";

export const YouWin = () => {
  // const { width, height } = useWindowSize();

  return (
    <>
      <div className="Win">
        <h1>Congrats You Win</h1>
      </div>
      <Confetti width={1300} height={2000} />
    </>
  );
};
