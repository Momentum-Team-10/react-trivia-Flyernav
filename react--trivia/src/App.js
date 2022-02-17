import { useEffect, useState } from "react";
import axios from "axios";
import { Display } from "./components/QuestionDisplay";
import { Choices } from "./components/Choices";
import "../src/question.css";

export default function App() {
  // const [categories, setCategories] = useState([]);
  // const [results.question[1], setQuestions] = useState([]);
  // const [answer, setAnswer] = useState([]);
  // const [wrongAnswers, setWrongAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then((response) => {
        setResults(response.data.results);
        console.log(results);
        // setCategories(results.map((resultsObj) => resultsObj.category));
        // setQuestions(results.map((resultsObj) => resultsObj.question));
        // setAnswer(results.map((resultsObj) => resultsObj.correct_answer));
        // setWrongAnswers(
        //   results.map((resultsObj) => resultsObj.incorrect_answers)
        // );
        // console.log(response.data.results);
      });
  }, []);

  const scoreClick = () => {
    setScore(score + 1);
  };

  const numberClick = () => {
    setQuestionNumber(questionNumber + 1);
  };

  return questionNumber === 0 ? (
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
        <Display question={results[0].question} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[0]}
          incorrectanswers={results.incorrect_answers[0]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 1 ? (
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
        <Display question={results.question[1]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[1]}
          incorrectanswers={results.incorrect_answers[1]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 2 ? (
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
        <Display question={results.question[2]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[2]}
          incorrectanswers={results.incorrect_answers[2]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 3 ? (
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
        <Display question={results.question[3]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[3]}
          incorrectanswers={results.incorrect_answers[3]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 4 ? (
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
        <Display question={results.question[4]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[4]}
          incorrectanswers={results.incorrect_answers[4]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 5 ? (
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
        <Display question={results.question[5]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[5]}
          incorrectanswers={results.incorrect_answers[5]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 6 ? (
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
        <Display question={results.question[6]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[6]}
          incorrectanswers={results.incorrect_answers[6]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 7 ? (
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
        <Display question={results.question[7]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[7]}
          incorrectanswers={results.incorrect_answers[7]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : questionNumber === 8 ? (
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
        <Display question={results.question[8]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[8]}
          incorrectanswers={results.incorrect_answers[8]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  ) : (
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
        <Display question={results.question[9]} />
      </div>

      <div>
        <Choices
          correctanswer={results.correct_answer[9]}
          incorrectanswers={results.incorrect_answers[9]}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
}
