import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, ArrowLeft, Star, TrendingUp, DollarSign, 
  Clock, Briefcase, Users, BookOpen, CheckCircle, 
  ChevronRight, Calendar, Award, Zap, Target
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { careerCategories } from '../data/fakeData';

const CareerDetails = () => {
  const { id } = useParams();

  const career = careerCategories.flatMap(cat => 
    cat.careers.map(c => ({ ...c, category: cat.name }))
  ).find(c => c.id === id);

  if (!career) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <Compass className="w-16 h-16 text-text-muted mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Career not found</h2>
          <Link to="/careers" className="text-primary-400 hover:text-primary-300">
            Back to careers
          </Link>
        </div>
      </div>
    );
  }

  const salaryData = [
    { label: 'Fresher', value: career.salary.fresher, icon: Award },
    { label: '3 Years', value: career.salary['3years'], icon: TrendingUp },
    { label: '5 Years', value: career.salary['5years'], icon: Star },
    { label: '10 Years', value: career.salary['10years'], icon: Zap },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <Link to="/careers" className="inline-flex items-center gap-2 text-text-muted hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                <Compass className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                    {career.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success-500/10 text-success-400 text-sm">
                    {career.demand} Demand
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm">
                    {career.difficulty} Difficulty
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">{career.title}</h1>
                <p className="text-text-muted text-lg mb-4">{career.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-success-400" />
                    <span className="text-sm">{career.salary.fresher} starting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">{career.growth} Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-400" />
                    <span className="text-sm">{career.learningDuration} to learn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary-400" />
                  Daily Responsibilities
                </h2>
                <div className="space-y-3">
                  {career.dailyWork.map((task, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{task}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-secondary-400" />
                  Required Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-primary-500/10 hover:border-primary-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-success-400" />
                  Salary Progression
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {salaryData.map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-white/5">
                      <item.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white mb-1">{item.value}</div>
                      <div className="text-xs text-text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent-400" />
                    Available Mentors
                  </h2>
                  <Link to="/mentors" className="text-primary-400 text-sm flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {career.mentors.map((mentor, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{mentor.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{mentor.name}</h3>
                        <p className="text-sm text-text-muted">{mentor.role} at {mentor.company}</p>
                        <p className="text-xs text-accent-400">{mentor.experience} experience</p>
                      </div>
                      <Link to="/mentors">
                        <button className="px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm hover:bg-primary-500/20 transition-colors">
                          Book Session
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-success-400" />
                    Related Internships
                  </h2>
                  <Link to="/internships" className="text-primary-400 text-sm flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {career.internships.map((internship, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{internship.title}</h3>
                        <p className="text-sm text-text-muted">{internship.company}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-text-muted">{internship.duration}</span>
                          <span className="text-xs text-success-400">{internship.stipend}</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-success-500/10 text-success-400 text-sm hover:bg-success-500/20 transition-colors">
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Career Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Growth Potential</span>
                    <span className="text-success-400 font-medium">{career.growth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Market Demand</span>
                    <span className="text-primary-400 font-medium">{career.demand}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Learning Curve</span>
                    <span className="text-accent-400 font-medium">{career.difficulty}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Freelancing</span>
                    <span className="text-secondary-400 font-medium">{career.freelancing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Business Potential</span>
                    <span className="text-success-400 font-medium">{career.business}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Work-Life Balance</span>
                    <span className="text-primary-400 font-medium">{career.workLife}</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <Link to="/quiz">
                <GlassCard className="text-center bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/20">
                  <Target className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Not sure if this is right?</h3>
                  <p className="text-sm text-text-muted mb-4">
                    Take our career quiz to find your perfect match
                  </p>
                  <span className="text-primary-400 text-sm font-medium flex items-center justify-center gap-1">
                    Take Quiz <ChevronRight className="w-4 h-4" />
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

export default CareerDetails;
