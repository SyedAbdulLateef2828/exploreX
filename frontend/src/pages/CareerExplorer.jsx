import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, Search, Filter, ChevronDown, Star, 
  TrendingUp, DollarSign, Clock, Briefcase, ArrowRight
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { careerCategories } from '../data/fakeData';

const CareerExplorer = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('demand');

  const allCareers = careerCategories.flatMap(cat => 
    cat.careers.map(career => ({ ...career, category: cat.name, categoryId: cat.id }))
  );

  const filteredCareers = allCareers.filter(career => {
    const matchesCategory = selectedCategory === 'all' || career.categoryId === selectedCategory;
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedCareers = [...filteredCareers].sort((a, b) => {
    if (sortBy === 'demand') return b.demand === 'Very High' ? 1 : -1;
    if (sortBy === 'salary') return 1; // Simplified sorting
    return 0;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Explore <span className="gradient-text">Career Paths</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Discover careers that match your interests, skills, and goals
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search careers..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-4 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white appearance-none"
                >
                  <option value="demand">Sort by Demand</option>
                  <option value="salary">Sort by Salary</option>
                  <option value="growth">Sort by Growth</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                }`}
              >
                All Categories
              </button>
              {careerCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Career Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {sortedCareers.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/careers/${career.id}`}>
                  <GlassCard className="h-full group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        career.demand === 'Very High' 
                          ? 'bg-success-500/10 text-success-400' 
                          : 'bg-primary-500/10 text-primary-400'
                      }`}>
                        {career.demand} Demand
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                      {career.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">
                      {career.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-success-400" />
                        <span className="text-text-muted">{career.salary.fresher}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-primary-400" />
                        <span className="text-text-muted">{career.growth} Growth</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-accent-400" />
                        <span className="text-text-muted">{career.learningDuration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-secondary-400" />
                        <span className="text-text-muted">{career.freelancing} Freelance</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex -space-x-2">
                        {career.mentors.slice(0, 3).map((mentor, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-background flex items-center justify-center"
                          >
                            <span className="text-xs text-white font-medium">
                              {mentor.name.charAt(0)}
                            </span>
                          </div>
                        ))}
                        <span className="text-xs text-text-muted ml-3">
                          {career.mentors.length} mentors
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {sortedCareers.length === 0 && (
          <div className="text-center py-20">
            <Compass className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No careers found</h3>
            <p className="text-text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerExplorer;