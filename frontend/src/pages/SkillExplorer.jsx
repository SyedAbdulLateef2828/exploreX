import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, Filter, ChevronDown, ArrowRight, 
  Target, TrendingUp, DollarSign, Clock, Layers
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { skillsData } from '../data/fakeData';

const SkillExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(skillsData.map(s => s.category))];

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Learn in-demand skills with structured roadmaps and curated resources
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
                placeholder="Search skills..."
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection key={skill.id} delay={index * 0.1}>
              <Link to={`/skills/${skill.id}`}>
                <GlassCard className="h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-text-muted mb-4">{skill.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-primary-400" />
                      <span className="text-text-muted">{skill.roadmap.length} steps roadmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-success-400" />
                      <span className="text-text-muted">{skill.careerOpportunities.length} career paths</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-accent-400" />
                      <span className="text-text-muted">{skill.businessOpportunities.length} business ideas</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 rounded-md bg-white/5 text-text-muted text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Roadmap <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillExplorer;