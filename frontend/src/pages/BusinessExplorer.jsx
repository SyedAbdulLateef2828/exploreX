import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Search, Filter, ChevronDown, DollarSign, 
  Clock, TrendingUp, Star, ArrowRight, Target,
  CheckCircle, Layers, Zap
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { businessIdeasData } from '../data/fakeData';

const BusinessExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(businessIdeasData.map(b => b.category))];

  const filteredBusinesses = businessIdeasData.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Business & <span className="gradient-text">Entrepreneurship</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Discover startup ideas, business models, and entrepreneurship roadmaps
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search business ideas..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    selectedCategory === cat
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Business Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBusinesses.map((business, index) => (
            <AnimatedSection key={business.id} delay={index * 0.1}>
              <GlassCard className="h-full group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    business.difficulty === 'Low' 
                      ? 'bg-success-500/10 text-success-400' 
                      : business.difficulty === 'Medium'
                      ? 'bg-yellow-500/10 text-yellow-400'
                      : 'bg-red-500/10 text-red-400'
                  }`}>
                    {business.difficulty} Difficulty
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
                <p className="text-text-muted mb-4">{business.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-text-muted mb-1">Investment</div>
                    <div className="text-sm font-medium text-success-400">{business.investment}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-text-muted mb-1">Revenue Potential</div>
                    <div className="text-sm font-medium text-primary-400">{business.revenue}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary-400" />
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {business.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent-400" />
                    Roadmap
                  </h4>
                  <div className="space-y-2">
                    {business.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success-400 flex-shrink-0 mt-0.5" />
                        <span className="text-text-muted">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Clock className="w-4 h-4" />
                    {business.timeline}
                  </div>
                  <span className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessExplorer;