import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Package, Ticket, Share2, Edit3, Copy, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'Orders' | 'Raffle History' | 'Settings' | 'Size Preferences'>('Orders');
  const [referralCopied, setReferralCopied] = useState(false);

  const orders = [
    {
      id: 'ORD-001',
      sneaker: 'Air Jordan 4 "Black Cat"',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop',
      price: 450,
      status: 'Delivered',
      date: '2024-12-10',
      tracking: 'TRK123456789'
    },
    {
      id: 'ORD-002',
      sneaker: 'Nike Dunk Low "Panda"',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop',
      price: 320,
      status: 'In Transit',
      date: '2024-12-15',
      tracking: 'TRK987654321'
    },
    {
      id: 'ORD-003',
      sneaker: 'Travis Scott x Fragment',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop',
      price: 1200,
      status: 'Upcoming Drop',
      date: '2024-12-25',
      tracking: null
    }
  ];

  const raffleHistory = [
    {
      id: 'RAF-001',
      sneaker: 'Jordan 4 "Bred Reimagined"',
      date: '2024-12-18',
      entries: 3,
      outcome: 'Won',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop'
    },
    {
      id: 'RAF-002',
      sneaker: 'Dunk Low "Chicago"',
      date: '2024-12-15',
      entries: 2,
      outcome: 'Lost',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop'
    },
    {
      id: 'RAF-003',
      sneaker: 'Yeezy 350 "Bone"',
      date: '2024-12-12',
      entries: 1,
      outcome: 'Lost',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop'
    },
    {
      id: 'RAF-004',
      sneaker: 'Off-White Chicago',
      date: '2024-12-08',
      entries: 5,
      outcome: 'Won',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=100&h=75&fit=crop'
    }
  ];

  const referralLink = 'https://ogninja.com/ref/shadowwalker';

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setReferralCopied(true);
    setTimeout(() => setReferralCopied(false), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'text-neon-green bg-neon-green/20';
      case 'In Transit': return 'text-blue-400 bg-blue-400/20';
      case 'Upcoming Drop': return 'text-neon-purple bg-neon-purple/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getOutcomeColor = (outcome: string) => {
    return outcome === 'Won' ? 'text-neon-green bg-neon-green/20' : 'text-red-400 bg-red-400/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
            MY <span className="text-neon-green">PROFILE</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Manage your ninja identity and track your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Header Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-neon-purple/20 via-black/40 to-neon-green/20 rounded-2xl p-8 border border-neon-green/30 relative overflow-hidden backdrop-blur-xl mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-lg opacity-50"></div>
                  <img
                    src={user?.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-neon-green relative z-10"
                  />
                  <button className="absolute bottom-2 right-2 bg-neon-green text-black p-2 rounded-full hover:bg-neon-green/90 transition-colors">
                    <Edit3 size={16} />
                  </button>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-display font-black text-white mb-2 tracking-wider">
                    @{user?.name?.replace(' ', '').toLowerCase()}
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                    <span className="bg-neon-green/20 text-neon-green px-4 py-2 rounded-full font-bold uppercase tracking-wider">
                      {user?.ninjaRank}
                    </span>
                    <span className="bg-neon-purple/20 text-neon-purple px-4 py-2 rounded-full font-bold">
                      {user?.xp} XP
                    </span>
                    <span className="bg-gray-600/20 text-gray-300 px-4 py-2 rounded-full font-semibold">
                      Member since {user?.memberSince}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-display font-black text-neon-green">{user?.totalSpent}</div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Total Spent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-black text-neon-purple">3</div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Raffles Won</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-black text-white">12</div>
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Orders</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-2 border border-gray-800/50 mb-8"
            >
              {(['Orders', 'Raffle History', 'Settings', 'Size Preferences'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-fit py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-neon-green to-neon-purple text-black'
                      : 'text-gray-400 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden"
            >
              {activeTab === 'Orders' && (
                <div>
                  <div className="p-6 border-b border-gray-800/50">
                    <h3 className="text-2xl font-display font-black text-white tracking-wider flex items-center">
                      <Package className="mr-3 text-neon-green" size={24} />
                      ORDER HISTORY
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="bg-dark-800/50 rounded-xl p-4 border border-gray-700/50">
                        <div className="flex items-center space-x-4">
                          <img
                            src={order.image}
                            alt={order.sneaker}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-bold">{order.sneaker}</h4>
                            <p className="text-gray-400 text-sm">Order #{order.id} • {order.date}</p>
                            {order.tracking && (
                              <p className="text-gray-500 text-xs">Tracking: {order.tracking}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-neon-green font-bold text-lg">${order.price}</div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Raffle History' && (
                <div>
                  <div className="p-6 border-b border-gray-800/50">
                    <h3 className="text-2xl font-display font-black text-white tracking-wider flex items-center">
                      <Ticket className="mr-3 text-neon-purple" size={24} />
                      RAFFLE HISTORY
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {raffleHistory.map((raffle) => (
                      <div key={raffle.id} className="bg-dark-800/50 rounded-xl p-4 border border-gray-700/50">
                        <div className="flex items-center space-x-4">
                          <img
                            src={raffle.image}
                            alt={raffle.sneaker}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-bold">{raffle.sneaker}</h4>
                            <p className="text-gray-400 text-sm">{raffle.date} • {raffle.entries} entries</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getOutcomeColor(raffle.outcome)}`}>
                              {raffle.outcome}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Settings' && (
                <div>
                  <div className="p-6 border-b border-gray-800/50">
                    <h3 className="text-2xl font-display font-black text-white tracking-wider flex items-center">
                      <Settings className="mr-3 text-neon-green" size={24} />
                      ACCOUNT SETTINGS
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        value={user?.email}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Display Name</label>
                      <input
                        type="text"
                        value={user?.name}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Notifications</label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded bg-dark-800 border-gray-700" defaultChecked />
                          <span className="text-gray-300">Drop alerts</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded bg-dark-800 border-gray-700" defaultChecked />
                          <span className="text-gray-300">Raffle results</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded bg-dark-800 border-gray-700" />
                          <span className="text-gray-300">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300">
                      <span onClick={() => alert('💾 Settings Saved!\n\nYour account settings have been updated successfully.')}>
                        SAVE CHANGES
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'Size Preferences' && (
                <div>
                  <div className="p-6 border-b border-gray-800/50">
                    <h3 className="text-2xl font-display font-black text-white tracking-wider flex items-center">
                      <User className="mr-3 text-neon-purple" size={24} />
                      SIZE PREFERENCES
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Primary Size (US)</label>
                      <select className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50">
                        <option value="9">9</option>
                        <option value="9.5">9.5</option>
                        <option value="10">10</option>
                        <option value="10.5">10.5</option>
                        <option value="11">11</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Secondary Size (US)</label>
                      <select className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-neon-green/50">
                        <option value="">None</option>
                        <option value="8.5">8.5</option>
                        <option value="9">9</option>
                        <option value="9.5">9.5</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Brand Preferences</label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded bg-dark-800 border-gray-700" defaultChecked />
                          <span className="text-gray-300">Nike/Jordan runs small</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded bg-dark-800 border-gray-700" />
                          <span className="text-gray-300">Adidas runs large</span>
                        </label>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300">
                      <span onClick={() => alert('👟 Size Preferences Saved!\n\nYour size preferences have been updated and will be used for future purchases.')}>
                        SAVE PREFERENCES
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Referral Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider flex items-center">
                <Share2 className="mr-2 text-neon-green" size={20} />
                REFERRAL STATS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Friends Referred</span>
                  <span className="text-neon-green font-bold">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">XP Earned</span>
                  <span className="text-neon-purple font-bold">700</span>
                </div>
                <div className="bg-dark-800/50 rounded-xl p-3">
                  <p className="text-gray-400 text-sm mb-2">Your referral link:</p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 px-3 py-2 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white text-sm"
                    />
                    <button
                      onClick={copyReferralLink}
                      className="p-2 bg-neon-green text-black rounded-lg hover:bg-neon-green/90 transition-colors"
                    >
                      {referralCopied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider">
                QUICK ACTIONS
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
                  <span onClick={() => alert('🔐 Two-Factor Authentication\n\nThis would set up 2FA for enhanced account security. Feature coming soon!')}>
                    ENABLE 2FA
                  </span>
                    🎟️ Enter Raffle
                  </span>
                </button>
                <button className="w-full bg-neon-purple text-white font-bold py-3 rounded-xl hover:bg-neon-purple/90 transition-colors uppercase tracking-wider">
                  <span onClick={() => window.location.href = '/shop'}>
                    🛒 Browse Vault
                  </span>
                </button>
                <button className="w-full border border-neon-green text-neon-green font-bold py-3 rounded-xl hover:bg-neon-green/10 transition-colors uppercase tracking-wider">
                  <span onClick={() => window.location.href = '/loyalty'}>
                    📊 View Stats
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Account Security */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-2xl p-6 border border-neon-green/30"
            >
              <h3 className="text-xl font-display font-black text-white mb-4 tracking-wider">
                🔒 ACCOUNT SECURITY
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Keep your ninja identity secure with two-factor authentication.
              </p>
              <button className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
                ENABLE 2FA
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;