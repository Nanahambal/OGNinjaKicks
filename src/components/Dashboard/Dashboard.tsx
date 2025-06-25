import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Target, TrendingUp, Star, Zap, Crown, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nextDrop = new Date();
      nextDrop.setDate(nextDrop.getDate() + 5);
      nextDrop.setHours(12, 0, 0, 0);
      
      const now = new Date().getTime();
      const distance = nextDrop.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-lg opacity-40 animate-pulse"></div>
            <img 
              src="/ChatGPT Image Jun 20, 2025, 12_08_38 PM.png" 
              alt="OG Ninja Kicks" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
            WELCOME TO THE <span className="text-neon-green">DOJO</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Ready to secure your next grail, <span className="text-neon-purple font-bold">{user?.name}</span>?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Next Drop Countdown - Hero Card */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-neon-purple/20 via-black/40 to-neon-green/20 rounded-2xl p-8 border border-neon-green/30 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-display font-black text-white tracking-wider">NEXT JORDAN DROP</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-bold uppercase tracking-wider">LIVE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'DAYS', value: timeLeft.days },
                    { label: 'HOURS', value: timeLeft.hours },
                    { label: 'MINS', value: timeLeft.minutes },
                    { label: 'SECS', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="text-center bg-black/50 rounded-xl p-4 border border-gray-800/50">
                      <div className="text-4xl font-display font-black text-neon-green mb-1">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{item.label}</div>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-black py-4 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 text-lg tracking-wider"
                >
                  🚨 SET DROP ALERT
                </motion.button>
              </div>
            </motion.div>

            {/* Sneaker of the Week */}
            <motion.div
              variants={cardVariants}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-black text-white tracking-wider">SNEAKER OF THE WEEK</h2>
                <Crown className="text-neon-purple" size={24} />
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-purple/20 rounded-xl blur-sm"></div>
                  <img
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                    alt="Featured Sneaker"
                    className="w-32 h-24 object-cover rounded-xl relative z-10"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Air Jordan 4 "Black Cat"</h3>
                  <p className="text-neon-purple font-semibold mb-3 uppercase tracking-wider">Exclusive Ninja Edition</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-green font-black text-2xl">$450</span>
                    <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">VIP ONLY</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              variants={cardVariants}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h2 className="text-2xl font-display font-black text-white mb-6 tracking-wider">RECENT ACTIVITY</h2>
              <div className="space-y-4">
                {[
                  { action: 'Entered raffle', item: 'Travis Scott x Fragment', time: '2 hours ago', icon: '🎟️' },
                  { action: 'Earned XP', item: '+50 XP from daily login', time: '1 day ago', icon: '⚡' },
                  { action: 'Won raffle', item: 'Dunk Low "Panda"', time: '3 days ago', icon: '🏆' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 px-4 bg-dark-800/50 rounded-xl border border-gray-800/30">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{activity.icon}</span>
                      <div>
                        <p className="text-white font-semibold">{activity.action}</p>
                        <p className="text-gray-400 text-sm">{activity.item}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm font-medium">{activity.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="space-y-6">
            {/* Member Stats */}
            <motion.div
              variants={cardVariants}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h2 className="text-xl font-display font-black text-white mb-6 tracking-wider">YOUR NINJA STATS</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-neon-green" size={20} />
                    <span className="text-gray-300 font-semibold">Ninja Rank</span>
                  </div>
                  <span className="text-neon-green font-black uppercase tracking-wider">{user?.ninjaRank}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Zap className="text-neon-purple" size={20} />
                    <span className="text-gray-300 font-semibold">XP Points</span>
                  </div>
                  <span className="text-white font-black">{user?.xp}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="text-neon-green" size={20} />
                    <span className="text-gray-300 font-semibold">Total Spent</span>
                  </div>
                  <span className="text-white font-black">${user?.totalSpent}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={cardVariants}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h2 className="text-xl font-display font-black text-white mb-6 tracking-wider">QUICK ACTIONS</h2>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-black py-4 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
                  🎟️ Enter Weekly Raffle
                </button>
                <button className="w-full bg-gradient-to-r from-neon-purple to-neon-green text-black font-black py-4 rounded-xl hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300 uppercase tracking-wider">
                  🔥 Browse Vault
                </button>
                <button className="w-full border-2 border-neon-green text-neon-green font-black py-4 rounded-xl hover:bg-neon-green/10 transition-all duration-300 uppercase tracking-wider">
                  🏆 Check Results
                </button>
              </div>
            </motion.div>

            {/* Progress to Next Rank */}
            <motion.div
              variants={cardVariants}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h2 className="text-xl font-display font-black text-white mb-6 tracking-wider">RANK PROGRESS</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 font-semibold uppercase tracking-wider">Progress to Shadow Master</span>
                  <span className="text-neon-green font-black">75%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-neon-green to-neon-purple h-3 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                  <span className="text-neon-purple font-bold">550 XP</span> needed for next rank
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;