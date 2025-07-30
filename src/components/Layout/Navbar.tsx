import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Ticket, Newspaper, Trophy, Users, User, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dojo' },
    { path: '/shop', icon: ShoppingBag, label: 'Vault' },
    { path: '/raffle', icon: Ticket, label: 'Raffle' },
    { path: '/news', icon: Newspaper, label: 'Intel' },
    { path: '/loyalty', icon: Trophy, label: 'XP Zone' },
    { path: '/members', icon: Users, label: 'Hall' },
    { path: '/account', icon: User, label: 'Profile' },
    { path: '/help', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="/ChatGPT Image Jun 20, 2025, 12_08_38 PM.png" 
                alt="OG Ninja Kicks" 
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <div className="hidden md:block">
              <span className="text-white font-display font-black text-xl tracking-wider">OG NINJA</span>
              <div className="text-neon-green font-display font-bold text-sm tracking-widest">KICKS</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    isActive
                      ? 'text-neon-green bg-dark-800/80'
                      : 'text-gray-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={16} />
                    <span className="uppercase tracking-wider">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-green to-neon-purple"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <p className="text-white font-bold text-sm uppercase tracking-wider">{user?.name}</p>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest">
                {user?.ninjaRank} • {user?.xp} XP
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-sm opacity-50"></div>
              <img
                src={user?.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-neon-green relative z-10"
              />
            </div>
            <button
              onClick={signOut}
              className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-dark-800/50"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-dark-800/80 backdrop-blur-xl border-t border-gray-800/50">
        <div className="flex overflow-x-auto">
          {navItems.slice(0, 6).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-4 px-4 min-w-0 flex-1 text-xs font-semibold transition-colors ${
                  isActive ? 'text-neon-green' : 'text-gray-400'
                }`}
              >
                <Icon size={20} />
                <span className="mt-1 truncate uppercase tracking-wider">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;