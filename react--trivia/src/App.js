import react, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryInfo } from "./CategoryData";
import { Display } from "./components/QuestionDisplay";
import { Choices } from "./components/AnswerChoice";

export default function App() {
  const [categories, setCategories] = useState(CategoryInfo);

  useEffect(() => {
    console.log("works");
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9")
      .then((response) => {
        const results = response.data.results;
        console.log(results);
        for (let result of results) {
          console.log(result.category);
        }
        setCategories(results.map((resultsObj) => resultsObj.category));
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
        <Display />
      </div>
      <div>
        <Choices />
      </div>
    </div>
  );
}
