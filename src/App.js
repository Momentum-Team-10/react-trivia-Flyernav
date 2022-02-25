import { useEffect, useState } from "react";
import axios from "axios";
import { Display } from "./components/QuestionDisplay";
import { Choices } from "./components/Choices";
import "../src/question.css";
import { YouWin } from "./components/YouWin";
import { decode } from "html-entities";

export default function App() {
  // const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then((response) => {
        const results = response.data.results;
        console.log(results);
        // setCategories(results.map((resultsObj) => resultsObj.category));
        setQuestions(results.map((resultsObj) => resultsObj.question));
        setAnswer(results.map((resultsObj) => resultsObj.correct_answer));
        setWrongAnswers(
          results.map((resultsObj) => resultsObj.incorrect_answers)
        );
        console.log(response.data.results);
      });
  }, []);

  const scoreClick = () => {
    setScore(score + 1);
  };

  const numberClick = () => {
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  console.log("This is a question number", questionNumber, wrongAnswers);

  return wrongAnswers.length > 0 ? (
    <>
      {score === 1 && <YouWin />}
      {score < 1 && (
        <div className="questionBox">
          <div className="container"></div>

          <Display question={decode(questions[questionNumber])} />
          <Choices
            correctanswer={answer[questionNumber]}
            incorrectanswers={decode(wrongAnswers[questionNumber])}
            scoreHandler={scoreClick}
            questionNumberHandler={numberClick}
          />
          <div className="score">Score: {score}</div>
        </div>
      )}
    </>
  ) : (
    <h1>Loading</h1>
  );
}
