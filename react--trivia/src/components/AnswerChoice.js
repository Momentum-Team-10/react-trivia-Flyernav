import React from "react";
// import { useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';

export const Choices = ({correctanswer, incorrectanswers}) => { 

return (
  <div className="container2">
      <div className="answerBox">
    <button>{correctanswer}</button>
    <button>{incorrectanswers[0]}</button>
    <button>{incorrectanswers[1]}</button>
    <button>{incorrectanswers[2]}</button>
      </div>
  </div>

)}