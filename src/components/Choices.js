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

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className="container2">
      <div className="answerBox">
        {shuffleArray(incorrectanswers.concat(correctanswer)).map((answer) => (
          <button
            className="Btn"
            variant="contained"
            value={answer}
            onClick={(event) => handleAnswerButtonClick(event)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
