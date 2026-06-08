import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Target, CheckCircle, 
  Compass, Star, TrendingUp, Award
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import { quizQuestions } from '../data/fakeData';

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    // Simplified scoring logic
    const scores = {
      'Software Engineer': 92,
      'AI Engineer': 88,
      'Data Scientist': 85,
      'Cyber Security Engineer': 82,
      'Product Manager': 78,
      'Digital Marketer': 75,
      'Entrepreneur': 72,
      'Doctor': 70,
    };
    return Object.entries(scores).map(([career, score]) => ({
      career,
      score,
      description: getCareerDescription(career),
    })).sort((a, b) => b.score - a.score);
  };

  const getCareerDescription = (career) => {
    const descriptions = {
      'Software Engineer': 'Build and maintain software applications and systems',
      'AI Engineer': 'Develop intelligent systems and machine learning models',
      'Data Scientist': 'Analyze data and extract meaningful insights',
      'Cyber Security Engineer': 'Protect systems and networks from threats',
      'Product Manager': 'Lead product development and strategy',
      'Digital Marketer': 'Drive growth through digital channels',
      'Entrepreneur': 'Build and scale your own business',
      'Doctor': 'Diagnose and treat medical conditions',
    };
    return descriptions[career] || '';
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500 to-primary-500 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Career <span className="gradient-text">Compatibility</span>
            </h1>
            <p className="text-text-muted text-lg">
              Based on your responses, here are your top career matches
            </p>
          </motion.div>

          <div className="space-y-4 mb-8">
            {results.slice(0, 5).map((result, index) => (
              <motion.div
                key={result.career}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{result.career}</h3>
                    <p className="text-sm text-text-muted">{result.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-400">{result.score}%</div>
                    <div className="text-xs text-text-muted">Match</div>
                  </div>
                  <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.score}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton onClick={() => navigate('/careers')} className="flex items-center gap-2">
              Explore Careers
              <Compass className="w-5 h-5" />
            </GradientButton>
            <GradientButton variant="secondary" onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
              setAnswers({});
            }}>
              Retake Quiz
            </GradientButton>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-6 h-6 text-primary-400" />
              Career Assessment
            </h1>
            <span className="text-text-muted">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="mb-6">
              <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
              <div className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      answers[question.id] === option.value
                        ? 'bg-primary-500/20 border-2 border-primary-500/50'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        answers[question.id] === option.value
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-white/30'
                      }`}>
                        {answers[question.id] === option.value && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-text-muted hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <GradientButton
            onClick={handleNext}
            disabled={!answers[question.id]}
            className="flex items-center gap-2"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;