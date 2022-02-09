import react, { useEffect, useState } from "react";
import axios from "axios";
import { Display } from "./components/QuestionDisplay";
import { Choices } from "./components/AnswerChoice";
import "../src/question.css"

export default function App() {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then((response) => {
        const results = response.data.results;
        console.log(results);
        setCategories(results.map((resultsObj) => resultsObj.category));
        setQuestions(results.map((resultsObj) => resultsObj.question));
        setAnswer(results.map((resultsObj) => resultsObj.correct_answer));
        setWrongAnswers(results.map((resultsObj) => resultsObj.incorrect_answers));
        console.log(categories)

      });
  }, []);
  console.log(categories);

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
        <Display
          question={questions[0]}
        />
      </div>
        
      <div>
        <Choices
        correctanswer={answer[0]}
        incorrectanswers={wrongAnswers[0]}
         />
      </div>
    </div>
  );
}
