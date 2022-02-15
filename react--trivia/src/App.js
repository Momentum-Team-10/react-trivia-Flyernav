import { useEffect, useState } from "react";
import axios from "axios";
import { Display } from "./components/QuestionDisplay";
import { Choices } from "./components/Choices";
import "../src/question.css";

export default function App() {
  // const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then((response) => {
        const results = response.data.results;
        console.log(results);
        // setCategories(results.map((resultsObj) => resultsObj.category));
        setQuestions(results.map((resultsObj) => resultsObj.question));
        setAnswer(results.map((resultsObj) => resultsObj.correct_answer));
        setWrongAnswers(response.data.results[0].incorrect_answers);
        console.log("works");
      });
  }, []);

  const scoreClick = () => {
    setScore(score + 1);
  };

  const scoreClickWrong = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <div className="container">
        <header className="questionHead">
          <h1>Wanna Question?</h1>
        </header>
      </div>
      <div>
        <h4>Test your knowledge of different Subjects</h4>
      </div>
      <div>
        <Display question={questions[0]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[0]}
          incorrectanswers={wrongAnswers}
          scoreHandler={scoreClick}
          scoreHandlerWrong={scoreClickWrong}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
}
