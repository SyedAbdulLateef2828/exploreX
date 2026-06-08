import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, MapPin, Briefcase, 
  ChevronDown, Users, Award, Clock
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { mentorsData } from '../data/fakeData';

const MentorExplorer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const allExpertise = [...new Set(mentorsData.flatMap(m => m.expertise))];

  const filteredMentors = mentorsData.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  const sortedMentors = [...filteredMentors].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    if (sortBy === 'reviews') return b.reviews - a.reviews;
    return 0;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Find Your <span className="gradient-text">Mentor</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Connect with industry experts who can guide your career journey
            </p>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search mentors by name, role, or company..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-4 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white appearance-none"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="experience">Sort by Experience</option>
                  <option value="reviews">Sort by Reviews</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedExpertise('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedExpertise === 'all'
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                }`}
              >
                All Expertise
              </button>
              {allExpertise.map((exp) => (
                <button
                  key={exp}
                  onClick={() => setSelectedExpertise(exp)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedExpertise === exp
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedMentors.map((mentor, index) => (
            <AnimatedSection key={mentor.id} delay={index * 0.1}>
              <Link to={`/mentors/${mentor.id}`}>
                <GlassCard className="h-full group">
                  <div className="text-center mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary-500/20 group-hover:border-primary-500/40 transition-colors"
                    />
                    <h3 className="text-xl font-semibold">{mentor.name}</h3>
                    <p className="text-primary-400">{mentor.role}</p>
                    <p className="text-text-muted text-sm">{mentor.company}</p>
                  </div>

                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-muted">
                      <Users className="w-4 h-4" />
                      <span>{mentor.reviews} reviews</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-muted">
                      <Clock className="w-4 h-4" />
                      <span>{mentor.experience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-success-400 font-medium">{mentor.price}</span>
                    <span className="text-primary-400 text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Book Now <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {sortedMentors.length === 0 && (
          <div className="text-center py-20">
            <Users className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
            <p className="text-text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorExplorer;