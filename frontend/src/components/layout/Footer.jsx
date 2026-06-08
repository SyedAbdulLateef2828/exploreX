import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Career Explorer', path: '/careers' },
      { name: 'Mentorship', path: '/mentors' },
      { name: 'Skill Hub', path: '/skills' },
      { name: 'AI Tools', path: '/ai-tools' },
    ],
    Resources: [
      { name: 'Success Stories', path: '/success-stories' },
      { name: 'Internships', path: '/internships' },
      { name: 'Business Ideas', path: '/business' },
      { name: 'Salary Guide', path: '/salary-predictor' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/5 bg-background-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ExploreX</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered career discovery platform helping students find their path, 
              connect with mentors, and build successful careers.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-muted" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-text-muted text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2024 ExploreX. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;