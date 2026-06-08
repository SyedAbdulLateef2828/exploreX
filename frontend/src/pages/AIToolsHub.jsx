import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Search, ChevronDown, DollarSign, Briefcase, 
  Star, ArrowRight, ExternalLink, BookOpen, TrendingUp
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { aiToolsData } from '../data/fakeData';

const AIToolsHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(aiToolsData.map(t => t.category))];

  const filteredTools = aiToolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              AI <span className="gradient-text">Tools Hub</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Discover AI tools that can help you earn money and build businesses
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
                placeholder="Search AI tools..."
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

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <AnimatedSection key={tool.id} delay={index * 0.1}>
              <GlassCard className="h-full group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                    {tool.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-text-muted mb-4">{tool.description}</p>

                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary-400" />
                    Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-white/5 text-text-muted text-xs"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Ideas */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-success-400" />
                    Business Ideas
                  </h4>
                  <div className="space-y-2">
                    {tool.businessIdeas.slice(0, 3).map((idea, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Star className="w-3 h-3 text-accent-400" />
                        <span className="text-text-muted">{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Income Potential */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-success-400" />
                      <span className="text-sm text-success-400 font-medium">{tool.incomePotential}</span>
                    </div>
                    <span className="text-primary-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
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

export default AIToolsHub;