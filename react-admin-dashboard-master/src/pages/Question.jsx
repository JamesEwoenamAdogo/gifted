import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const quiz = [
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is the capital of France?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for the quiz
  const [quizFinished, setQuizFinished] = useState(false);
  const location = useLocation();
  const quizData = location.state.questions

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setQuizFinished(true);
    }
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-100">
      {!quizFinished ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Question {currentQuestion + 1} of {quizData.length}</span>
            <span className="text-red-500 font-bold">Time Left: {timeLeft}s</span>
          </div>
          <h2 className="text-xl font-semibold mb-4">{quizData[currentQuestion].question}</h2>
          <div className="space-y-2">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`w-full py-2 px-4 rounded-lg border ${selectedAnswers[currentQuestion] === option ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={prevQuestion} disabled={currentQuestion === 0} className="px-4 py-2 bg-gray-300 rounded-lg">Previous</button>
            {currentQuestion === quizData.length - 1 ? (
              <button onClick={() => setQuizFinished(true)} className="px-4 py-2 bg-green-500 text-white rounded-lg">Finish</button>
            ) : (
              <button onClick={nextQuestion} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
          <p className="text-lg">Your Score: {calculateScore()} / {quizData.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
