import React from "react";
import { Button } from "@material-ui/core";

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

  return (
    <div className="container2">
      <div className="answerBox">
        <Button
          variant="contained"
          value={correctanswer}
          onClick={(event) => handleAnswerButtonClick(event)}
        >
          {correctanswer}
        </Button>
        {incorrectanswers.map((incorrectanswer) => (
          <Button
            variant="contained"
            value={incorrectanswer}
            onClick={(event) => handleAnswerButtonClick(event)}
          >
            {incorrectanswer}
          </Button>
        ))}
      </div>
    </div>
  );
};
