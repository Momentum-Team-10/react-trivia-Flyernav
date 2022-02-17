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
        setWrongAnswers(response.data.results[0].incorrect_answers);
        console.log(response.data.results);
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
        <Display question={questions[0]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[0]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[1]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[1]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[2]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[2]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[3]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[3]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[4]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[4]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[5]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[5]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[6]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[6]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[7]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[7]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[8]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[8]}
          incorrectanswers={wrongAnswers}
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
        <Display question={questions[9]} />
      </div>

      <div>
        <Choices
          correctanswer={answer[9]}
          incorrectanswers={wrongAnswers}
          scoreHandler={scoreClick}
          questionNumberHandler={numberClick}
        />
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
}
