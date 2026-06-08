import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, ArrowRight, Star, Users, BookOpen, 
  TrendingUp, Zap, Award, ChevronRight, Play,
  Target, Lightbulb, Rocket, BarChart3
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import { careerCategories, successStories, mentorsData } from '../data/fakeData';

const LandingPage = () => {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Students Guided' },
    { icon: Compass, value: '200+', label: 'Career Paths' },
    { icon: Award, value: '500+', label: 'Success Stories' },
    { icon: Zap, value: '100+', label: 'AI Tools' },
  ];

  const features = [
    {
      icon: Target,
      title: 'AI Career Matching',
      description: 'Get personalized career recommendations based on your skills, interests, and goals.',
      color: 'from-primary-500 to-secondary-500',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals who guide you through your career journey.',
      color: 'from-secondary-500 to-accent-500',
    },
    {
      icon: BookOpen,
      title: 'Skill Roadmaps',
      description: 'Follow structured learning paths with curated courses and resources.',
      color: 'from-accent-500 to-success-500',
    },
    {
      icon: TrendingUp,
      title: 'Salary Insights',
      description: 'Explore salary trends and growth potential across different careers.',
      color: 'from-success-500 to-primary-500',
    },
    {
      icon: Rocket,
      title: 'Business Ideas',
      description: 'Discover AI-powered business opportunities and entrepreneurship roadmaps.',
      color: 'from-primary-500 to-accent-500',
    },
    {
      icon: Lightbulb,
      title: 'AI Tools Hub',
      description: 'Learn to leverage AI tools like ChatGPT, Claude, and Canva for income.',
      color: 'from-secondary-500 to-primary-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
            >
              <Star className="w-4 h-4" />
              AI-Powered Career Discovery Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Discover Your{' '}
              <span className="gradient-text">Perfect Career</span>
              <br />
              Path with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
            >
              Explore careers, connect with mentors, learn in-demand skills, 
              and discover AI-powered business opportunities — all in one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/quiz">
                <GradientButton size="lg" className="flex items-center gap-2">
                  Take Career Quiz
                  <ArrowRight className="w-5 h-5" />
                </GradientButton>
              </Link>
              <Link to="/careers">
                <GradientButton variant="secondary" size="lg" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Explore Careers
                </GradientButton>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A comprehensive platform designed to guide you from student to professional
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="section-padding bg-background-light/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore <span className="gradient-text">Career Categories</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Choose your field and discover relevant career paths
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <Link to={`/careers?category=${category.id}`}>
                  <GlassCard className="text-center h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-text-muted text-sm mb-4">{category.careers.length} career paths</p>
                    <div className="flex items-center justify-center gap-1 text-primary-400 text-sm font-medium">
                      Explore <ChevronRight className="w-4 h-4" />
                    </div>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Real students who transformed their careers with ExploreX
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.slice(0, 3).map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-sm text-text-muted">{story.background}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {story.journey.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-4 h-4 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{step.stage}</div>
                          <div className="text-xs text-text-muted">{step.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-sm text-text-muted italic">"{story.quote}"</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Preview */}
      <section className="section-padding bg-background-light/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Learn from <span className="gradient-text">Industry Experts</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Connect with mentors from top companies
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorsData.slice(0, 3).map((mentor, index) => (
              <AnimatedSection key={mentor.id} delay={index * 0.1}>
                <GlassCard className="text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-primary-500/30"
                  />
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  <p className="text-primary-400 text-sm">{mentor.role}</p>
                  <p className="text-text-muted text-sm mb-3">{mentor.company}</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                    <span className="text-sm text-text-muted">({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.expertise.slice(0, 2).map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/mentors">
              <GradientButton className="flex items-center gap-2 mx-auto">
                View All Mentors
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
                  Take our AI-powered career assessment quiz and get personalized recommendations in minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/quiz">
                    <GradientButton size="lg" className="flex items-center gap-2">
                      Take Career Quiz
                      <ArrowRight className="w-5 h-5" />
                    </GradientButton>
                  </Link>
                  <Link to="/register">
                    <GradientButton variant="secondary" size="lg">
                      Create Free Account
                    </GradientButton>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;