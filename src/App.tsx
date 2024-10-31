import React, { useState } from 'react';
import { Brain, CheckCircle2, ArrowRight, RefreshCcw } from 'lucide-react';
import { questions } from './data/questions';
import { QuizProgress } from './components/QuizProgress';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { QuizStart } from './components/QuizStart';

export type Answer = {
  questionIndex: number;
  selectedOption: string;
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, { questionIndex: currentQuestion, selectedOption: answer }]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(-1);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Self-Awareness Quiz</h1>
          </div>
          <p className="text-gray-600">Discover your level of self-awareness through real-world scenarios</p>
        </header>

        <main className="bg-white rounded-2xl shadow-xl p-6 md:p-8 min-h-[500px]">
          {currentQuestion === -1 && !showResults && (
            <QuizStart onStart={handleStart} />
          )}

          {currentQuestion >= 0 && !showResults && (
            <>
              <QuizProgress 
                current={currentQuestion + 1} 
                total={questions.length} 
              />
              <QuizQuestion
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </>
          )}

          {showResults && (
            <QuizResults 
              answers={answers}
              questions={questions}
              onReset={handleReset}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;