import React from "react";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export const Choices = () => {
    const [choices, setChoices] = useState([]) 
    
    useEffect(() => {
      axios
          .get('https://opentdb.com/api.php?amount=10&category=9')
          .then((response) => {
            const results = response.data.results
            console.log(results)
            for (let result of results) {
              console.log(result.choices)
            }
            setChoices(results.map((resultsObj) => resultsObj.Choices))
          })
    }, [])

return (
  <div className="container">
    <div>Answer1</div>
    <div>Answer2</div>
    <div>Answer3</div>
    <div>Answer4</div>
  </div>

)}