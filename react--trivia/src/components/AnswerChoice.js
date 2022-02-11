import React from "react";
// import { useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';

export const Choices = ({ correctanswer, incorrectanswers }) => { 

return (
  <div className="container2">
      <div className="answerBox">
    <button>{correctanswer}</button>
    { incorrectanswers.map(answer => (<button>{answer}</button>))
      }
      </div>
  </div>

)}