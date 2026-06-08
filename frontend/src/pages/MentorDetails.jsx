import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Star, MapPin, Briefcase, GraduationCap, 
  Award, Calendar, Clock, CheckCircle, ChevronRight,
  MessageSquare, BookOpen, TrendingUp
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import AnimatedSection from '../components/ui/AnimatedSection';
import { mentorsData } from '../data/fakeData';

const MentorDetails = () => {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);

  const mentor = mentorsData.find(m => m.id === id);

  if (!mentor) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Mentor not found</h2>
          <Link to="/mentors" className="text-primary-400 hover:text-primary-300">
            Back to mentors
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingStep(2);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <Link to="/mentors" className="inline-flex items-center gap-2 text-text-muted hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Mentors
          </Link>
        </AnimatedSection>

        {/* Profile Header */}
        <AnimatedSection>
          <div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-primary-500/20"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-3xl font-bold">{mentor.name}</h1>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                    <span className="text-xs text-text-muted">({mentor.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-primary-400 text-lg mb-1">{mentor.role}</p>
                <p className="text-text-muted mb-4">{mentor.company} • {mentor.experience}</p>
                <p className="text-text-muted mb-4">{mentor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-primary-500/10 text-primary-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary-400" />
                  About
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Education</div>
                      <div className="text-sm text-text-muted">{mentor.education}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="text-sm text-text-muted">{mentor.experience}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Achievements</div>
                      <div className="text-sm text-text-muted">{mentor.achievements.join(', ')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Availability</div>
                      <div className="text-sm text-text-muted">{mentor.availability.join(', ')}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Booking Section */}
            <AnimatedSection>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-success-400" />
                  Book a Session
                </h2>

                {bookingStep === 1 ? (
                  <>
                    <p className="text-text-muted mb-4">Select a time slot that works for you</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {mentor.timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-4 rounded-xl text-left transition-all ${
                            selectedSlot === slot
                              ? 'bg-primary-500/20 border-2 border-primary-500/50'
                              : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-primary-400" />
                            <span className="font-medium">{slot}</span>
                          </div>
                          <div className="text-xs text-text-muted">{mentor.price}</div>
                        </button>
                      ))}
                    </div>
                    <GradientButton
                      onClick={handleBooking}
                      disabled={!selectedSlot}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      Continue to Payment
                      <ChevronRight className="w-5 h-5" />
                    </GradientButton>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-success-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-success-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
                      <p className="text-text-muted">
                        Your session with {mentor.name} is scheduled for {selectedSlot}
                      </p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-text-muted">Mentor</span>
                        <span className="font-medium">{mentor.name}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-text-muted">Time Slot</span>
                        <span className="font-medium">{selectedSlot}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="text-text-muted">Price</span>
                        <span className="font-medium text-success-400">{mentor.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <GradientButton className="flex-1 flex items-center justify-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Join Session
                      </GradientButton>
                      <GradientButton variant="secondary" className="flex-1">
                        Reschedule
                      </GradientButton>
                    </div>
                  </motion.div>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection>
              <GlassCard className="text-center">
                <div className="text-3xl font-bold text-success-400 mb-1">{mentor.price}</div>
                <div className="text-sm text-text-muted mb-4">per session</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-text-muted">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    1-on-1 Video Call
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    60 Minutes Duration
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    Recording Available
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                    Follow-up Support
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard>
                <h3 className="font-semibold mb-3">Session Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Total Sessions</span>
                    <span className="font-medium">{mentor.reviews * 2}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Satisfaction</span>
                    <span className="font-medium text-success-400">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Response Time</span>
                    <span className="font-medium">&lt; 2 hours</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;