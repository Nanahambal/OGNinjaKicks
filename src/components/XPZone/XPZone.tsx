import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Target, Users, ShoppingBag, MessageCircle, Share2, Crown, Star, X, CreditCard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const XPZone = () => {
  const { user } = useAuth();
  const [showBoostModal, setShowBoostModal] = React.useState(false);
  const [selectedBoost, setSelectedBoost] = React.useState<string | null>(null);

  const boostPackages = [
    {
      id: 'starter',
      name: 'Starter Boost',
      xp: 500,
      price: 9.99,
      popular: false,
      description: 'Perfect for new ninjas looking to level up quickly',
      features: ['500 XP instantly', 'Skip 2-3 weeks of grinding', 'Unlock Silver tier faster']
    },
    {
      id: 'power',
      name: 'Power Boost',
      xp: 1200,
      price: 19.99,
      popular: true,
      description: 'Most popular choice for serious ninjas',
      features: ['1,200 XP instantly', 'Jump straight to Shadow Master', '20% bonus XP for 7 days', 'Exclusive badge']
    },
    {
      id: 'ultimate',
      name: 'Ultimate Boost',
      xp: 2500,
      price: 39.99,
      popular: false,
      description: 'Maximum power for elite ninjas',
      features: ['2,500 XP instantly', 'Guaranteed Shadow Master rank', '50% bonus XP for 14 days', 'Exclusive avatar frame', 'Priority raffle entries']
    }
  ];

  const handlePurchaseBoost = (boostId: string) => {
    // In a real app, this would integrate with payment processing
    const boost = boostPackages.find(b => b.id === boostId);
    if (boost) {
      alert(`🚀 XP Boost purchased! You gained ${boost.xp} XP instantly!\n\nIn a real app, this would process payment and update your XP.`);
      setShowBoostModal(false);
      setSelectedBoost(null);
    }
  };

  const xpActivities = [
    {
      icon: ShoppingBag,
      title: 'Buy Sneakers',
      description: '+50 XP per $100 spent',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/20'
    },
    {
      icon: Target,
      title: 'Enter Raffles',
      description: '+10 XP per entry',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/20'
    },
    {
      icon: Share2,
      title: 'Refer Friends',
      description: '+100 XP per successful referral',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      icon: MessageCircle,
      title: 'Read Intel Posts',
      description: '+5 XP per article read',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: '+15 XP per comment/like',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/20'
    },
    {
      icon: Star,
      title: 'Daily Login',
      description: '+25 XP per day',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    }
  ];

  const tiers = [
    {
      name: 'Bronze Ninja',
      range: '0 - 499 XP',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
      perks: ['1x raffle entry/week', 'Basic member access', 'Community forum access'],
      current: false
    },
    {
      name: 'Silver Shinobi',
      range: '500 - 1,199 XP',
      color: 'text-gray-300',
      bgColor: 'bg-gray-300/20',
      perks: ['2x raffle entries/week', 'Early access drops', 'Priority customer support'],
      current: user?.ninjaRank === 'Silver'
    },
    {
      name: 'Shadow Master',
      range: '1,200+ XP',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/20',
      perks: ['3x raffle entries/week', 'VIP support', 'Exclusive merch access', 'Beta feature access'],
      current: user?.ninjaRank === 'Gold' // Assuming Gold maps to Shadow Master
    }
  ];

  const currentXP = user?.xp || 0;
  const nextTierXP = currentXP < 500 ? 500 : currentXP < 1200 ? 1200 : 2000;
  const progressPercentage = currentXP < 500 ? (currentXP / 500) * 100 : 
                            currentXP < 1200 ? ((currentXP - 500) / 700) * 100 : 
                            Math.min(((currentXP - 1200) / 800) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
            XP <span className="text-neon-green">ZONE</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Power up your rank. Earn Ninja XP for every move you make.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress & Tiers */}
          <div className="lg:col-span-2 space-y-8">
            {/* XP Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-neon-purple/20 via-black/40 to-neon-green/20 rounded-2xl p-8 border border-neon-green/30 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-display font-black text-white tracking-wider">YOUR PROGRESS</h2>
                  <Zap className="text-neon-green" size={32} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-display font-black text-neon-green mb-2">{currentXP}</div>
                    <div className="text-gray-400 font-semibold uppercase tracking-wider">Current XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-black text-neon-purple mb-2">{user?.ninjaRank || 'Bronze'}</div>
                    <div className="text-gray-400 font-semibold uppercase tracking-wider">Current Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-black text-white mb-2">{nextTierXP - currentXP}</div>
                    <div className="text-gray-400 font-semibold uppercase tracking-wider">XP to Next</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">Progress to Next Tier</span>
                    <span className="text-neon-green font-bold">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-neon-green to-neon-purple h-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-gradient-to-r from-neon-green to-neon-purple text-black font-black py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
                    <span onClick={() => setShowBoostModal(true)}>🚀 BOOST XP</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Ways to Earn XP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50"
            >
              <h2 className="text-2xl font-display font-black text-white mb-8 tracking-wider">WAYS TO EARN XP</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {xpActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-dark-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-neon-green/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${activity.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={activity.color} size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2">{activity.title}</h3>
                          <p className="text-gray-400 text-sm">{activity.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tier System */}
          <div className="space-y-6">
            {/* Tier Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider flex items-center">
                <Crown className="mr-2 text-neon-purple" size={20} />
                NINJA TIERS
              </h3>
              <div className="space-y-4">
                {tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      tier.current 
                        ? 'border-neon-green bg-neon-green/10' 
                        : 'border-gray-700/50 bg-dark-800/50 hover:border-gray-600/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`font-bold text-lg ${tier.color}`}>{tier.name}</h4>
                      {tier.current && <Trophy className="text-neon-green" size={20} />}
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{tier.range}</p>
                    <div className="space-y-1">
                      {tier.perks.map((perk, perkIndex) => (
                        <div key={perkIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                          <span className="text-gray-300 text-sm">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* XP Multiplier Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-2xl p-6 border border-neon-green/30"
            >
              <h3 className="text-xl font-display font-black text-white mb-4 tracking-wider">
                🔥 DOUBLE XP WEEKEND
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Earn 2x XP on all activities this weekend! Perfect time to level up your ninja rank.
              </p>
              <div className="bg-black/50 rounded-xl p-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-black text-neon-green mb-1">48:23:15</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Time Remaining</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
                <span onClick={() => alert('🔥 Double XP Activated!\n\nYou are now earning 2x XP on all activities for the next 48 hours!')}>
                  ACTIVATE BOOST
                </span>
              </button>
            </motion.div>

            {/* CTA Strip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 text-center"
            >
              <h3 className="text-lg font-display font-black text-white mb-3 tracking-wider">
                MORE XP = MORE HEAT
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Join this week's drop or share your referral link to climb faster.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-neon-green text-black font-bold py-3 rounded-xl hover:bg-neon-green/90 transition-colors uppercase tracking-wider">
                  <span onClick={() => window.location.href = '/raffle'}>
                    ENTER RAFFLE
                  </span>
                </button>
                <button className="w-full border border-neon-purple text-neon-purple font-bold py-3 rounded-xl hover:bg-neon-purple/10 transition-colors uppercase tracking-wider">
                  <span onClick={() => alert('🔗 Referral Link Copied!\n\nhttps://ogninja.com/ref/shadowwalker\n\nShare this link to earn 100 XP for each friend who joins!')}>
                    SHARE REFERRAL
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* XP Boost Modal */}
      {showBoostModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-dark-900 via-black to-dark-800 rounded-2xl border border-neon-green/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBoostModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="p-8 border-b border-gray-800/50">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-green to-neon-purple rounded-full flex items-center justify-center">
                  <Zap className="text-black" size={32} />
                </div>
                <h2 className="text-3xl font-display font-black text-white mb-2 tracking-wider">
                  XP <span className="text-neon-green">BOOST</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Skip the grind. Level up instantly.
                </p>
              </div>
            </div>

            {/* Boost Packages */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {boostPackages.map((boost, index) => (
                  <motion.div
                    key={boost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                      boost.popular 
                        ? 'border-neon-green bg-neon-green/5' 
                        : 'border-gray-800/50 hover:border-neon-green/50'
                    }`}
                    onClick={() => setSelectedBoost(boost.id)}
                  >
                    {/* Popular Badge */}
                    {boost.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-neon-green to-neon-purple text-black text-xs font-bold px-3 py-1 rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-display font-black text-white mb-2 tracking-wider">
                        {boost.name}
                      </h3>
                      <div className="text-4xl font-display font-black text-neon-green mb-1">
                        {boost.xp.toLocaleString()}
                      </div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">XP POINTS</div>
                      <div className="text-2xl font-bold text-white">
                        ${boost.price}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm text-center mb-6">
                      {boost.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {boost.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePurchaseBoost(boost.id);
                      }}
                      className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        boost.popular
                          ? 'bg-gradient-to-r from-neon-green to-neon-purple text-black hover:shadow-lg hover:shadow-neon-green/25'
                          : 'border-2 border-neon-green text-neon-green hover:bg-neon-green/10'
                      }`}
                    >
                      <CreditCard size={20} />
                      <span>PURCHASE BOOST</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-dark-800/50 rounded-xl p-6 border border-gray-800/50">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Zap className="mr-2 text-neon-green" size={20} />
                  How XP Boost Works
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
                  <div>
                    <h5 className="text-white font-semibold mb-2">Instant Delivery</h5>
                    <p>XP is added to your account immediately after purchase. No waiting, no delays.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Rank Benefits</h5>
                    <p>Higher ranks unlock more raffle entries, exclusive drops, and VIP perks.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Bonus Multipliers</h5>
                    <p>Some packages include temporary XP multipliers for future activities.</p>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Secure Payment</h5>
                    <p>All transactions are processed securely through our payment partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default XPZone;