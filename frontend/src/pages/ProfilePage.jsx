import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, GraduationCap, BookOpen, 
  Target, Star, Edit2, Save, Camera, Award,
  TrendingUp, Calendar, MapPin
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    education: user?.education || '',
    degree: user?.degree || '',
    interests: user?.interests || '',
    hobbies: user?.hobbies || '',
    goals: user?.goals || '',
  });

  const handleSave = async () => {
    const result = await updateProfile(formData);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const stats = [
    { icon: Award, label: 'Quiz Completed', value: '1' },
    { icon: Star, label: 'Career Matches', value: '8' },
    { icon: TrendingUp, label: 'Skills Learning', value: '3' },
    { icon: Calendar, label: 'Mentor Sessions', value: '2' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-background-light border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold mb-2">{user?.name || 'Student'}</h1>
                <p className="text-primary-400 mb-1">{user?.education || 'Student'}</p>
                <p className="text-text-muted">{user?.degree || ''}</p>
              </div>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="px-4 py-2 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors flex items-center gap-2"
              >
                {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Profile Details */}
        <AnimatedSection delay={0.2}>
          <GlassCard>
            <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <User className="w-5 h-5 text-primary-400" />
                    <span>{formData.name || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <span>{formData.email || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span>{formData.phone || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Education</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <GraduationCap className="w-5 h-5 text-primary-400" />
                    <span>{formData.education || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Stream/Degree</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <BookOpen className="w-5 h-5 text-primary-400" />
                    <span>{formData.degree || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Interests</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white"
                  />
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <Star className="w-5 h-5 text-primary-400" />
                    <span>{formData.interests || 'Not set'}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-text-muted mb-2">Career Goals</label>
                {isEditing ? (
                  <textarea
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none text-white resize-none"
                  />
                ) : (
                  <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/5">
                    <Target className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{formData.goals || 'Not set'}</span>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProfilePage;