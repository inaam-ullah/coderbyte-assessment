import React, { useState } from 'react';

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

function App() {
  const questions = [
    { question: 'What is the capital of France?', options: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 'Paris' },
    { question: 'What is the capital of Germany?', options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'], correct: 'Berlin' },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [prevFeedback, setPrevFeedback] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }

    if (currentQuestionIndex === questions.length - 1) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPrevFeedback(feedback);
      setSelectedOption('');
    }
  };

  return (
    <div style={style.container}>
      {!quizComplete && (
        <>
          <div id="question" style={style.question}>{questions[currentQuestionIndex].question}</div>
          <div style={style.options}>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index + 1}`}
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index + 1}`}>{option}</label>
              </div>
            ))}
          </div>
          <button style={style.button} onClick={handleSubmit} id="submitBtn">Submit</button>
          {prevFeedback && <div id="prevFeedback" style={style.feedback}>Previous Feedback: {prevFeedback}</div>}
          {feedback && <div id="feedback" style={style.feedback}>{feedback}</div>}
        </>
      )}
      {quizComplete && (
        <div id="feedback" style={style.feedback}>
          Quiz Complete! You scored {score} out of {questions.length}!
        </div>
      )}
    </div>
  );
};

export default App;
