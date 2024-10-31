import React from 'react';
import { ArrowRight } from 'lucide-react';

type QuizStartProps = {
  onStart: () => void;
};

export function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="text-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        How Self-Aware Are You?
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Read each scenario carefully and choose the response that best reflects how you would react. 
        There are no right or wrong answers – this quiz is designed to help you reflect on your 
        level of self-awareness.
      </p>

      <div className="bg-indigo-50 rounded-xl p-6 mb-8 text-left">
        <h3 className="text-lg font-semibold text-indigo-900 mb-4">What you'll learn:</h3>
        <ul className="space-y-2 text-indigo-700">
          <li>• Your current level of self-awareness in professional settings</li>
          <li>• How you handle feedback and criticism</li>
          <li>• Your approach to challenges and mistakes</li>
          <li>• Your communication style in different scenarios</li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 bg-indigo-600 text-white py-3 px-6 
                   rounded-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        Start Quiz
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}