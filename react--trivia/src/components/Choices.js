import React from "react";
// import { useState } from "react";
// import { useEffect } from 'react';
// import axios from 'axios';

export const Choices = ({ correctanswer, incorrectanswers, scoreHandler }) => {
  console.log(correctanswer);
  const handleAnswerButtonClick = (event) => {
    console.log(event);
    if (correctanswer === event.target.value) {
      alert("this answer is correct");
      scoreHandler();
    } else alert("this answer is incorrect");
  };

  return (
    <div className="container2">
      <div className="answerBox">
        <button
          value={correctanswer}
          onClick={(event) => handleAnswerButtonClick(event)}
        >
          {correctanswer}
        </button>
        {incorrectanswers.map((incorrectanswer) => (
          <button
            value={incorrectanswer}
            onClick={(event) => handleAnswerButtonClick(event)}
          >
            {incorrectanswer}
          </button>
        ))}
      </div>
    </div>
  );
};
