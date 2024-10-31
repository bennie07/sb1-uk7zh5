import React from 'react';
import { RefreshCcw, ArrowRight } from 'lucide-react';
import { Question } from '../data/questions';
import { Answer } from '../App';

type QuizResultsProps = {
  answers: Answer[];
  questions: Question[];
  onReset: () => void;
};

export function QuizResults({ answers, questions, onReset }: QuizResultsProps) {
  const score = answers.filter(
    (answer) => answer.selectedOption === questions[answer.questionIndex].correctAnswer
  ).length;

  const getScoreLevel = () => {
    if (score <= 1) return "Beginning Self-Awareness Level";
    if (score <= 3) return "Developing Self-Awareness Level";
    return "Advanced Self-Awareness Level";
  };

  const getScoreDescription = () => {
    if (score <= 1) {
      return "Your self-awareness could use some development. Consider practicing mindfulness and seeking regular feedback.";
    }
    if (score <= 3) {
      return "You show promising self-awareness capabilities. There's room to grow in areas like emotional regulation and proactive communication.";
    }
    return "Excellent demonstration of self-awareness! You show strong capabilities in emotional intelligence, active listening, and professional communication.";
  };

  const handleNextLesson = () => {
    // Placeholder function for next lesson navigation
    console.log('Navigate to next lesson');
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
        <p className="text-gray-600">You scored {score} out of {questions.length} points</p>
      </div>

      <div className="bg-indigo-50 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">
          {getScoreLevel()}
        </h3>
        <p className="text-indigo-700">
          {getScoreDescription()}
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => {
          const userAnswer = answers[index].selectedOption;
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Question {index + 1}: {question.scenario}
              </h4>
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-700">Your answer: </span>
                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {question.options[userAnswer]}
                </span>
              </div>
              {!isCorrect && (
                <div className="mt-2 text-sm text-gray-600">
                  <span className="font-medium">Correct answer: </span>
                  {question.options[question.correctAnswer]}
                </div>
              )}
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Feedback: </span>
                {question.feedback}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 space-y-4">
        <button
          onClick={handleNextLesson}
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white 
                     py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          Continue to next Lesson
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white 
                     py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          <RefreshCcw className="w-5 h-5" />
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}