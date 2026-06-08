import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Search, Filter, ChevronDown, MapPin, 
  Clock, DollarSign, Users, Calendar, ArrowRight,
  CheckCircle, Star, Building
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { internshipsData } from '../data/fakeData';

const InternshipHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');

  const domains = ['all', ...new Set(internshipsData.map(i => i.domain))];

  const filteredInternships = internshipsData.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || internship.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Internship <span className="gradient-text">Opportunities</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Discover internships and gain real-world experience
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
                placeholder="Search internships..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    selectedDomain === domain
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-white/5 text-text-muted border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Internships List */}
        <div className="space-y-4">
          {filteredInternships.map((internship, index) => (
            <AnimatedSection key={internship.id} delay={index * 0.05}>
              <GlassCard className="group">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{internship.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                        {internship.domain}
                      </span>
                    </div>
                    <p className="text-lg text-primary-400 mb-2">{internship.company}</p>
                    <p className="text-text-muted mb-4">{internship.description}</p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <MapPin className="w-4 h-4" />
                        {internship.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <Clock className="w-4 h-4" />
                        {internship.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-success-400">
                        <DollarSign className="w-4 h-4" />
                        {internship.stipend}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <Users className="w-4 h-4" />
                        {internship.applications} applications
                      </div>
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <Calendar className="w-4 h-4" />
                        Deadline: {internship.deadline}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((req, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-md bg-white/5 text-text-muted text-xs"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 flex-shrink-0">
                    <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-neon transition-all whitespace-nowrap">
                      Apply Now
                    </button>
                    <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all whitespace-nowrap">
                      Save for Later
                    </button>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No internships found</h3>
            <p className="text-text-muted">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipHub;