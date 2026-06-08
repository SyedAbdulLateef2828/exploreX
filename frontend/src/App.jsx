import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import CareerExplorer from './pages/CareerExplorer';
import CareerDetails from './pages/CareerDetails';
import CareerQuiz from './pages/CareerQuiz';
import MentorExplorer from './pages/MentorExplorer';
import MentorDetails from './pages/MentorDetails';
import SkillExplorer from './pages/SkillExplorer';
import SkillDetails from './pages/SkillDetails';
import CareerComparison from './pages/CareerComparison';
import SalaryPredictor from './pages/SalaryPredictor';
import BusinessExplorer from './pages/BusinessExplorer';
import AIToolsHub from './pages/AIToolsHub';
import InternshipHub from './pages/InternshipHub';
import SuccessStories from './pages/SuccessStories';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { useAuth } from './contexts/AuthContext';

// ✅ FIX 1: Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/careers" element={<CareerExplorer />} />
            <Route path="/careers/:id" element={<CareerDetails />} />
            <Route path="/mentors" element={<MentorExplorer />} />
            <Route path="/mentors/:id" element={<MentorDetails />} />
            <Route path="/skills" element={<SkillExplorer />} />
            <Route path="/skills/:id" element={<SkillDetails />} />
            <Route path="/compare" element={<CareerComparison />} />
            <Route path="/salary-predictor" element={<SalaryPredictor />} />
            <Route path="/business" element={<BusinessExplorer />} />
            <Route path="/ai-tools" element={<AIToolsHub />} />
            <Route path="/internships" element={<InternshipHub />} />
            <Route path="/success-stories" element={<SuccessStories />} />

            {/* ✅ FIX 1: Protected routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><CareerQuiz /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

            {/* ✅ FIX 2: 404 fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;