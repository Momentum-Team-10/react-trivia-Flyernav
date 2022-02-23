import React from "react";
// import { Button } from "@material-ui/core";

export const Choices = ({
  correctanswer,
  incorrectanswers,
  scoreHandler,
  questionNumberHandler,
}) => {
  console.log(correctanswer);
  const handleAnswerButtonClick = (event) => {
    console.log(event);
    if (correctanswer === event.target.value) {
      alert("this answer is correct");
      scoreHandler();
    } else alert("this answer is incorrect");

    questionNumberHandler();
  };
  console.log(incorrectanswers);
  return (
    <div className="container2">
      <div className="answerBox">
        <button
          variant="contained"
          value={correctanswer}
          onClick={(event) => handleAnswerButtonClick(event)}
        >
          {correctanswer}
        </button>

        {incorrectanswers.map((incorrectanswer) => (
          <button
            variant="contained"
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
