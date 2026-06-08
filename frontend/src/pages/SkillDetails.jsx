import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, BookOpen, Target, TrendingUp, DollarSign, 
  Clock, CheckCircle, Layers, ArrowRight, ChevronRight,
  Star, Briefcase
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { skillsData } from '../data/fakeData';

const SkillDetails = () => {
  const { id } = useParams();
  const skill = skillsData.find(s => s.id === id);

  if (!skill) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-text-muted mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Skill not found</h2>
          <Link to="/skills" className="text-primary-400 hover:text-primary-300">
            Back to skills
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <Link to="/skills" className="inline-flex items-center gap-2 text-text-muted hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Skills
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection>
          <div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm mb-3 inline-block">
                  {skill.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">{skill.name}</h1>
                <p className="text-text-muted text-lg">{skill.description}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Roadmap */}
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary-400" />
                  Learning Roadmap
                </h2>
                <div className="space-y-4">
                  {skill.roadmap.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-accent-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {step.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.resources.map((resource) => (
                            <span
                              key={resource}
                              className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs"
                            >
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Career Opportunities */}
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-success-400" />
                  Career Opportunities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skill.careerOpportunities.map((career, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    >
                      <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
                      <span className="font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Business Opportunities */}
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent-400" />
                  Business Opportunities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skill.businessOpportunities.map((business, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    >
                      <Star className="w-5 h-5 text-accent-400 flex-shrink-0" />
                      <span className="font-medium">{business}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Recommended Tools</h3>
                <div className="space-y-3">
                  {skill.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                    >
                      <Layers className="w-5 h-5 text-primary-400" />
                      <span className="font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <Link to="/mentors">
                <GlassCard className="text-center bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/20">
                  <Target className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Need Guidance?</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Connect with mentors who specialize in this skill
                  </p>
                  <span className="text-primary-400 text-sm font-medium flex items-center justify-center gap-1">
                    Find Mentors <ArrowRight className="w-4 h-4" />
                  </span>
                </GlassCard>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;