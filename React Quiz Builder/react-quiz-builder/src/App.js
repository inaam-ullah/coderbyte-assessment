import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
    // do not modify the questions or answers below
    const questions = [
      { question: "What is the capital of France?", options: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 'Paris',},
      { question: "What is the capital of Germany?", options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'], correct: 'Berlin',}
    ];

    return (
      <div style={style.container}>
        <div id="question" style={style.question}></div>
          <div style={style.options}></div>
          <button style={style.button} id="submitBtn"> Submit </button>
        <div id="feedback" style={style.feedback}></div>
      </ div>
    );
};

const container = document.getElementById('root');
const root = createRoot (container);
root.render (<QuizApp />);
