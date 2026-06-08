import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitCompare, ArrowRight, CheckCircle, XCircle, 
  TrendingUp, DollarSign, Clock, Briefcase, Star,
  ChevronDown
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { careerCategories } from '../data/fakeData';

const CareerComparison = () => {
  const allCareers = careerCategories.flatMap(cat => cat.careers);
  const [career1, setCareer1] = useState(allCareers[0]);
  const [career2, setCareer2] = useState(allCareers[1]);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const comparisonFields = [
    { label: 'Starting Salary', key: 'salary', subkey: 'fresher', icon: DollarSign },
    { label: 'Growth Potential', key: 'growth', icon: TrendingUp },
    { label: 'Market Demand', key: 'demand', icon: Star },
    { label: 'Learning Difficulty', key: 'difficulty', icon: Briefcase },
    { label: 'Learning Duration', key: 'learningDuration', icon: Clock },
    { label: 'Freelancing Potential', key: 'freelancing', icon: Briefcase },
    { label: 'Business Potential', key: 'business', icon: TrendingUp },
    { label: 'Work-Life Balance', key: 'workLife', icon: Star },
  ];

  const getValue = (career, field) => {
    if (field.subkey) {
      return career[field.key][field.subkey];
    }
    return career[field.key];
  };

  const getScore = (value) => {
    const scores = { 'Very High': 5, 'High': 4, 'Medium': 3, 'Low': 2, 'Very Low': 1 };
    return scores[value] || 3;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Career <span className="gradient-text">Comparison</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Compare different career paths side by side to make informed decisions
            </p>
          </div>
        </AnimatedSection>

        {/* Career Selectors */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Career 1 Selector */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown1(!showDropdown1)}
                className="w-full glass-card p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <GitCompare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-text-muted">Career 1</div>
                    <div className="font-semibold">{career1.title}</div>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown1 ? 'rotate-180' : ''}`} />
              </button>
              {showDropdown1 && (
                <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-60 overflow-y-auto z-10">
                  {allCareers.map((career) => (
                    <button
                      key={career.id}
                      onClick={() => {
                        setCareer1(career);
                        setShowDropdown1(false);
                      }}
                      className="w-full p-3 text-left hover:bg-white/5 transition-colors flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{career.title.charAt(0)}</span>
                      </div>
                      <span>{career.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Career 2 Selector */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown2(!showDropdown2)}
                className="w-full glass-card p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
                    <GitCompare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-text-muted">Career 2</div>
                    <div className="font-semibold">{career2.title}</div>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown2 ? 'rotate-180' : ''}`} />
              </button>
              {showDropdown2 && (
                <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-60 overflow-y-auto z-10">
                  {allCareers.map((career) => (
                    <button
                      key={career.id}
                      onClick={() => {
                        setCareer2(career);
                        setShowDropdown2(false);
                      }}
                      className="w-full p-3 text-left hover:bg-white/5 transition-colors flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{career.title.charAt(0)}</span>
                      </div>
                      <span>{career.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection delay={0.2}>
          <GlassCard>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-text-muted font-medium">Parameter</th>
                    <th className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{career1.title.charAt(0)}</span>
                        </div>
                        <span className="font-semibold">{career1.title}</span>
                      </div>
                    </th>
                    <th className="text-center p-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{career2.title.charAt(0)}</span>
                        </div>
                        <span className="font-semibold">{career2.title}</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFields.map((field, index) => {
                    const val1 = getValue(career1, field);
                    const val2 = getValue(career2, field);
                    const score1 = getScore(val1);
                    const score2 = getScore(val2);
                    const winner = score1 > score2 ? 1 : score2 > score1 ? 2 : 0;

                    return (
                      <motion.tr
                        key={field.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <field.icon className="w-4 h-4 text-primary-400" />
                            <span className="text-text-muted">{field.label}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${
                            winner === 1 ? 'bg-success-500/10 text-success-400' : 'bg-white/5'
                          }`}>
                            {winner === 1 && <CheckCircle className="w-4 h-4" />}
                            <span className="font-medium">{val1}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${
                            winner === 2 ? 'bg-success-500/10 text-success-400' : 'bg-white/5'
                          }`}>
                            {winner === 2 && <CheckCircle className="w-4 h-4" />}
                            <span className="font-medium">{val2}</span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Skills Comparison */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <GlassCard>
              <h3 className="font-semibold mb-4">{career1.title} Skills</h3>
              <div className="flex flex-wrap gap-2">
                {career1.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <h3 className="font-semibold mb-4">{career2.title} Skills</h3>
              <div className="flex flex-wrap gap-2">
                {career2.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-lg bg-secondary-500/10 text-secondary-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CareerComparison;