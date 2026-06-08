import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, BookOpen, Code, Building, ArrowRight,
  Star, Quote, TrendingUp, Target
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { successStories } from '../data/fakeData';

const SuccessStories = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Real students who transformed their careers with ExploreX
            </p>
          </div>
        </AnimatedSection>

        {/* Stories */}
        <div className="space-y-8">
          {successStories.map((story, index) => (
            <AnimatedSection key={story.id} delay={index * 0.1}>
              <GlassCard>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Profile */}
                  <div className="lg:w-1/3 text-center">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary-500/20"
                    />
                    <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                    <p className="text-primary-400 mb-2">{story.background}</p>
                    <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
                      <Clock className="w-4 h-4" />
                      Journey: {story.timeline}
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div className="lg:w-2/3">
                    <h4 className="font-semibold mb-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary-400" />
                      Career Journey
                    </h4>
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

                      <div className="space-y-6">
                        {story.journey.map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex items-start gap-4 pl-16"
                          >
                            <div className="absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 p-4 rounded-xl bg-white/5">
                              <div className="font-semibold mb-1">{step.stage}</div>
                              <div className="text-sm text-text-muted">{step.detail}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
                      <Quote className="w-8 h-8 text-primary-400 mb-3" />
                      <p className="text-lg italic text-text-muted">"{story.quote}"</p>
                      <div className="mt-3 text-sm font-medium">- {story.name}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;