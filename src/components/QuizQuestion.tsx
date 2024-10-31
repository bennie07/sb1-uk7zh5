import React from 'react';
import { Question } from '../data/questions';

type QuizQuestionProps = {
  question: Question;
  onAnswer: (answer: string) => void;
};

export function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Scenario: {question.scenario}
      </h2>
      <p className="text-gray-700 mb-6">{question.prompt}</p>
      
      <div className="space-y-3">
        {Object.entries(question.options).map(([key, text]) => (
          <button
            key={key}
            onClick={() => onAnswer(key)}
            className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-500 
                     hover:bg-indigo-50 transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full 
                             border-2 border-gray-300 group-hover:border-indigo-500 
                             text-sm font-medium text-gray-500 group-hover:text-indigo-600">
                {key}
              </span>
              <span className="text-gray-700 group-hover:text-gray-900">{text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}