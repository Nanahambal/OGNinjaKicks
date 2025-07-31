import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, Medal, Star, Upload, Camera, Zap } from 'lucide-react';

const HallOfFame = () => {
  const [activeTab, setActiveTab] = useState<'All-Time' | 'This Month' | 'New Recruits'>('All-Time');

  const leaderboardData = {
    'All-Time': [
      { rank: 1, username: 'ShadowKicker23', xp: 15420, rafflesWon: 12, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 2, username: 'NinjaStrike', xp: 14890, rafflesWon: 10, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 3, username: 'StealthRunner', xp: 13750, rafflesWon: 9, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 4, username: 'KicksMaster', xp: 12340, rafflesWon: 8, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 5, username: 'DojoLegend', xp: 11890, rafflesWon: 7, badge: 'Silver Shinobi', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 6, username: 'SneakerNinja', xp: 10450, rafflesWon: 6, badge: 'Silver Shinobi', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 7, username: 'HypeHunter', xp: 9870, rafflesWon: 5, badge: 'Silver Shinobi', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 8, username: 'FlexMaster', xp: 8920, rafflesWon: 4, badge: 'Silver Shinobi', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 9, username: 'KickCollector', xp: 7650, rafflesWon: 3, badge: 'Bronze Ninja', avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 10, username: 'DropHunter', xp: 6890, rafflesWon: 2, badge: 'Bronze Ninja', avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' }
    ],
    'This Month': [
      { rank: 1, username: 'NinjaStrike', xp: 2890, rafflesWon: 3, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 2, username: 'ShadowKicker23', xp: 2420, rafflesWon: 2, badge: 'Shadow Master', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 3, username: 'FlexMaster', xp: 1920, rafflesWon: 2, badge: 'Silver Shinobi', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' }
    ],
    'New Recruits': [
      { rank: 1, username: 'FreshKicks', xp: 450, rafflesWon: 1, badge: 'Bronze Ninja', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 2, username: 'NewNinja', xp: 320, rafflesWon: 0, badge: 'Bronze Ninja', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' },
      { rank: 3, username: 'RookieRunner', xp: 280, rafflesWon: 0, badge: 'Bronze Ninja', avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop' }
    ]
  };

  const flexWall = [
    {
      username: 'ShadowKicker23',
      sneaker: 'Travis Scott x Fragment',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 234
    },
    {
      username: 'NinjaStrike',
      sneaker: 'Jordan 4 "Bred"',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 189
    },
    {
      username: 'StealthRunner',
      sneaker: 'Dunk Low "Panda"',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 156
    },
    {
      username: 'KicksMaster',
      sneaker: 'Yeezy 350 "Zebra"',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 142
    },
    {
      username: 'DojoLegend',
      sneaker: 'Off-White Chicago',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 198
    },
    {
      username: 'SneakerNinja',
      sneaker: 'Jordan 1 "Shadow"',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      likes: 167
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="text-yellow-400" size={24} />;
      case 2: return <Medal className="text-gray-300" size={24} />;
      case 3: return <Medal className="text-orange-400" size={24} />;
      default: return <Trophy className="text-gray-500" size={20} />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Shadow Master': return 'text-neon-green bg-neon-green/20';
      case 'Silver Shinobi': return 'text-gray-300 bg-gray-300/20';
      case 'Bronze Ninja': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
            NINJA HALL OF <span className="text-neon-green">FAME</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Only the most elite have made it here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2 space-y-8">
            {/* Leaderboard Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex space-x-2 bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-gray-800/50"
            >
              {(['All-Time', 'This Month', 'New Recruits'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-neon-green to-neon-purple text-black'
                      : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Leaderboard Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-800/50">
                <h2 className="text-2xl font-display font-black text-white tracking-wider">
                  {activeTab.toUpperCase()} LEADERBOARD
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Ninja</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">XP</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Wins</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Badge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {leaderboardData[activeTab].map((member, index) => (
                      <motion.tr
                        key={member.username}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="hover:bg-dark-800/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {getRankIcon(member.rank)}
                            <span className="text-white font-bold">#{member.rank}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-sm opacity-50"></div>
                              <img
                                src={member.avatar}
                                alt={member.username}
                                className="w-10 h-10 rounded-full border-2 border-neon-green relative z-10"
                              />
                            </div>
                            <span className="text-white font-semibold">{member.username}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-neon-green font-bold">{member.xp.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-white font-semibold">{member.rafflesWon}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getBadgeColor(member.badge)}`}>
                            {member.badge}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Wall of Ninjas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-black text-white tracking-wider">WALL OF NINJAS</h2>
                <Camera className="text-neon-purple" size={24} />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {flexWall.map((flex, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-gray-800/50 group-hover:border-neon-green/50 transition-all duration-300">
                      <img
                        src={flex.image}
                        alt={flex.sneaker}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <img
                              src={flex.avatar}
                              alt={flex.username}
                              className="w-6 h-6 rounded-full border border-neon-green"
                            />
                            <span className="text-white font-semibold text-sm">{flex.username}</span>
                          </div>
                          <p className="text-gray-300 text-xs">{flex.sneaker}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="text-neon-green fill-current" size={12} />
                            <span className="text-neon-green text-xs font-bold">{flex.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">Want your photo here? Tag us or upload directly from your profile.</p>
                <button className="bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 flex items-center space-x-2 mx-auto">
                  <Upload size={20} />
                  <span onClick={() => alert('📸 Upload Feature!\n\nThis would open a photo upload dialog in a real app. Share your best sneaker photos with the community!')}>
                    UPLOAD FLEX SHOT
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider flex items-center">
                <Zap className="mr-2 text-neon-green" size={20} />
                TOP PERFORMERS
              </h3>
              <div className="space-y-4">
                {leaderboardData['All-Time'].slice(0, 3).map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-xl">
                    {getRankIcon(member.rank)}
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-8 h-8 rounded-full border border-neon-green"
                    />
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{member.username}</p>
                      <p className="text-neon-green text-xs font-bold">{member.xp.toLocaleString()} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement Spotlight */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-2xl p-6 border border-neon-green/30"
            >
              <h3 className="text-xl font-display font-black text-white mb-4 tracking-wider">
                🏆 ACHIEVEMENT SPOTLIGHT
              </h3>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-green to-neon-purple rounded-full flex items-center justify-center">
                  <Crown className="text-black" size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">SHADOW MASTER</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Reach 1,200+ XP to unlock exclusive perks and VIP status
                </p>
                <div className="bg-black/50 rounded-xl p-3">
                  <div className="text-neon-green font-bold text-sm">PERKS UNLOCKED:</div>
                  <div className="text-gray-300 text-xs mt-1">
                    • 3x Raffle Entries<br/>
                    • VIP Support<br/>
                    • Exclusive Merch
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider">
                COMMUNITY STATS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Ninjas</span>
                  <span className="text-neon-green font-bold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Shadow Masters</span>
                  <span className="text-neon-purple font-bold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total XP Earned</span>
                  <span className="text-white font-bold">1.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Raffles Won</span>
                  <span className="text-neon-green font-bold">423</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;