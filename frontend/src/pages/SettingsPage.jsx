import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Bell, Moon, Shield, Globe, 
  ChevronRight, CheckCircle, User, Key
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import GlassCard from '../components/ui/GlassCard';
import AnimatedSection from '../components/ui/AnimatedSection';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');
  const [privacy, setPrivacy] = useState('public');

  const settingsSections = [
    {
      title: 'Appearance',
      icon: Moon,
      items: [
        {
          label: 'Dark Mode',
          description: 'Toggle dark/light theme',
          action: (
            <button
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                theme === 'dark' ? 'bg-primary-500' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          ),
        },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          label: 'Push Notifications',
          description: 'Receive alerts about new opportunities',
          action: (
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                notifications ? 'bg-primary-500' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                notifications ? 'translate-x-7' : 'translate-x-1'
              }`} />
            </button>
          ),
        },
        {
          label: 'Email Updates',
          description: 'Weekly career insights and tips',
          action: (
            <button className="w-12 h-6 rounded-full bg-primary-500 relative">
              <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
            </button>
          ),
        },
      ],
    },
    {
      title: 'Privacy',
      icon: Shield,
      items: [
        {
          label: 'Profile Visibility',
          description: 'Who can see your profile',
          action: (
            <select
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
            >
              <option value="public">Public</option>
              <option value="mentors">Mentors Only</option>
              <option value="private">Private</option>
            </select>
          ),
        },
      ],
    },
    {
      title: 'Language',
      icon: Globe,
      items: [
        {
          label: 'App Language',
          description: 'Choose your preferred language',
          action: (
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
              <option value="ta">Tamil</option>
            </select>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-text-muted">Manage your preferences and account settings</p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {settingsSections.map((section, index) => (
            <AnimatedSection key={section.title} delay={index * 0.1}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                    >
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-text-muted">{item.description}</div>
                      </div>
                      <div>{item.action}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}

          {/* Account Actions */}
          <AnimatedSection delay={0.4}>
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-primary-400" />
                Account Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left flex items-center justify-between">
                  <div>
                    <div className="font-medium">Change Password</div>
                    <div className="text-sm text-text-muted">Update your account password</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted" />
                </button>
                <button className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left flex items-center justify-between">
                  <div>
                    <div className="font-medium text-red-400">Delete Account</div>
                    <div className="text-sm text-text-muted">Permanently delete your account and data</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted" />
                </button>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;