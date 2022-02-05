import React from "react";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export const Display = () => {
  // const categories = ["vehicles", "Entertainment: Music", "Geography"]
  const [categories, setCategories] = useState([]) 
  
  useEffect(() => {
    axios
        .get('https://opentdb.com/api.php?amount=10&category=9')
        .then((response) => {
          const results = response.data.results
          console.log(results)
          for (let result of results) {
            console.log(result.category)
          }
          setCategories(results.map((resultsObj) => resultsObj.category))
        })
  }, [])

return (
  <div className="container">
    <div>
  Where the question is going to be
    </div>
  </div>

)}