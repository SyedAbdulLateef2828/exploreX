import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, Target, Users, BookOpen, TrendingUp, 
  Zap, Award, ChevronRight, Star, Clock, Calendar
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { careerCategories, mentorsData, internshipsData } from '../data/fakeData';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    { icon: Target, title: 'Career Quiz', desc: 'Find your match', path: '/quiz', color: 'from-primary-500 to-secondary-500' },
    { icon: Compass, title: 'Explore Careers', desc: 'Browse paths', path: '/careers', color: 'from-secondary-500 to-accent-500' },
    { icon: Users, title: 'Find Mentors', desc: 'Get guidance', path: '/mentors', color: 'from-accent-500 to-success-500' },
    { icon: BookOpen, title: 'Learn Skills', desc: 'Start learning', path: '/skills', color: 'from-success-500 to-primary-500' },
  ];

  const recentActivity = [
    { icon: Target, text: 'Completed Career Quiz', time: '2 days ago', type: 'quiz' },
    { icon: Users, text: 'Booked session with Rahul Sharma', time: '3 days ago', type: 'mentor' },
    { icon: BookOpen, text: 'Started Web Development Roadmap', time: '1 week ago', type: 'skill' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{user?.name || 'Student'}</span> 👋
            </h1>
            <p className="text-text-muted">
              Here's what's happening with your career journey
            </p>
          </div>
        </AnimatedSection>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <AnimatedSection key={action.path} delay={index * 0.1}>
              <Link to={action.path}>
                <GlassCard className="h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-text-muted">{action.desc}</p>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Career Recommendations */}
            <AnimatedSection>
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">Recommended Careers</h2>
                    <p className="text-sm text-text-muted">Based on your profile and quiz results</p>
                  </div>
                  <Link to="/careers" className="text-primary-400 text-sm flex items-center gap-1 hover:text-primary-300">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {careerCategories[0].careers.slice(0, 3).map((career, index) => (
                    <div key={career.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{career.title}</h3>
                        <p className="text-sm text-text-muted">{career.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs px-2 py-1 rounded bg-success-500/10 text-success-400">
                            {career.demand} Demand
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-primary-500/10 text-primary-400">
                            {career.salary.fresher}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-400">
                          {90 - index * 3}%
                        </div>
                        <div className="text-xs text-text-muted">Match</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Recent Internships */}
            <AnimatedSection>
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold">Latest Internships</h2>
                    <p className="text-sm text-text-muted">Opportunities matching your profile</p>
                  </div>
                  <Link to="/internships" className="text-primary-400 text-sm flex items-center gap-1 hover:text-primary-300">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {internshipsData.slice(0, 3).map((internship) => (
                    <div key={internship.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{internship.title}</h3>
                        <p className="text-sm text-text-muted">{internship.company} • {internship.location}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {internship.duration}
                          </span>
                          <span className="text-xs text-success-400">{internship.stipend}</span>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">
                        {internship.applications} applied
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Progress */}
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Profile Completion</h3>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">75% Complete</span>
                  <Link to="/profile" className="text-primary-400 hover:text-primary-300">
                    Complete now
                  </Link>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Recent Activity */}
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-text-muted">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Upcoming Sessions */}
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mentorship with Rahul Sharma</p>
                      <p className="text-xs text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Tomorrow, 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/mentors" className="mt-4 block text-center text-sm text-primary-400 hover:text-primary-300">
                  Book more sessions
                </Link>
              </GlassCard>
            </AnimatedSection>

            {/* Top Mentors */}
            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-4">Top Mentors</h3>
                <div className="space-y-4">
                  {mentorsData.slice(0, 3).map((mentor) => (
                    <Link key={mentor.id} to={`/mentors/${mentor.id}`}>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{mentor.name}</p>
                          <p className="text-xs text-text-muted truncate">{mentor.role} at {mentor.company}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs">{mentor.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;