import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, Briefcase, ChevronDown,
  BarChart3, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { careerCategories } from '../data/fakeData';

const SalaryPredictor = () => {
  const allCareers = careerCategories.flatMap(cat => cat.careers);
  const [selectedCareer, setSelectedCareer] = useState(allCareers[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [years, setYears] = useState(5);

  const salaryData = [
    { years: 0, label: 'Fresher', value: selectedCareer.salary.fresher },
    { years: 3, label: '3 Years', value: selectedCareer.salary['3years'] },
    { years: 5, label: '5 Years', value: selectedCareer.salary['5years'] },
    { years: 10, label: '10 Years', value: selectedCareer.salary['10years'] },
  ];

  const parseSalary = (salaryStr) => {
    if (salaryStr === 'Variable') return 0;
    const match = salaryStr.match(/₹(\d+)-(\d+)/);
    if (match) {
      return (parseInt(match[1]) + parseInt(match[2])) / 2;
    }
    return 0;
  };

  const maxSalary = Math.max(...salaryData.map(d => parseSalary(d.value)));

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Salary <span className="gradient-text">Predictor</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Explore salary growth potential across different career paths
            </p>
          </div>
        </AnimatedSection>

        {/* Career Selector */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full glass-card p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold">{selectedCareer.title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-60 overflow-y-auto z-10">
                  {allCareers.map((career) => (
                    <button
                      key={career.id}
                      onClick={() => {
                        setSelectedCareer(career);
                        setShowDropdown(false);
                      }}
                      className="w-full p-3 text-left hover:bg-white/5 transition-colors flex items-center gap-3"
                    >
                      <span>{career.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Salary Chart */}
        <AnimatedSection delay={0.2}>
          <GlassCard className="mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary-400" />
              Salary Growth Chart
            </h2>
            <div className="space-y-6">
              {salaryData.map((data, index) => {
                const salary = parseSalary(data.value);
                const percentage = maxSalary > 0 ? (salary / maxSalary) * 100 : 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-20 text-sm font-medium">{data.label}</div>
                      <div className="flex-1">
                        <div className="h-8 bg-white/5 rounded-lg overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-end pr-2"
                          >
                            <span className="text-xs font-medium text-white whitespace-nowrap">
                              {data.value}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Salary Details */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {salaryData.map((data, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-text-muted mb-1">{data.label}</div>
                <div className="text-xl font-bold text-white mb-2">{data.value}</div>
                {index > 0 && (
                  <div className="flex items-center justify-center gap-1 text-xs text-success-400">
                    <ArrowUpRight className="w-3 h-3" />
                    Growth from previous
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Insights */}
        <AnimatedSection delay={0.4}>
          <GlassCard className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success-400" />
              Career Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-text-muted mb-2">Growth Rate</div>
                <div className="text-2xl font-bold text-success-400">{selectedCareer.growth}</div>
                <div className="text-xs text-text-muted mt-1">Expected growth potential</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-text-muted mb-2">Market Demand</div>
                <div className="text-2xl font-bold text-primary-400">{selectedCareer.demand}</div>
                <div className="text-xs text-text-muted mt-1">Current job market status</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-text-muted mb-2">Learning Time</div>
                <div className="text-2xl font-bold text-accent-400">{selectedCareer.learningDuration}</div>
                <div className="text-xs text-text-muted mt-1">Average time to job-ready</div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SalaryPredictor;