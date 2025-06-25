import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Ticket, Star } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Raffle = () => {
  const { user } = useAuth();
  const [activeRaffle, setActiveRaffle] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const raffles = [
    {
      id: 1,
      sneaker: {
        name: 'Air Jordan 1 "Chicago Lost & Found"',
        image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        price: 550
      },
      endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      totalEntries: 1247,
      maxEntries: 2000,
      entryPrice: 25,
      winners: ['Shadow Walker', 'Ninja Master', 'Stealth Runner']
    },
    {
      id: 2,
      sneaker: {
        name: 'Travis Scott x Fragment Low',
        image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        price: 1200
      },
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      totalEntries: 890,
      maxEntries: 1500,
      entryPrice: 50,
      winners: []
    }
  ];

  const previousWinners = [
    {
      name: 'Shadow Walker',
      sneaker: 'Dunk Low "Panda"',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      date: '3 days ago'
    },
    {
      name: 'Ninja Master',
      sneaker: 'Yeezy 350 "Zebra"',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      date: '1 week ago'
    },
    {
      name: 'Stealth Runner',
      sneaker: 'Air Jordan 4 "Military Blue"',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      date: '2 weeks ago'
    }
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = raffles[activeRaffle].endDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [activeRaffle]);

  const currentRaffle = raffles[activeRaffle];
  const entryPercentage = (currentRaffle.totalEntries / currentRaffle.maxEntries) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-display font-bold text-white mb-2">Raffle Room</h1>
        <p className="text-gray-400 text-lg">Your chance to win exclusive drops</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Raffle */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-xl p-8 border border-neon-green/30 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-white">Live Raffle</h2>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium">LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={currentRaffle.sneaker.image}
                  alt={currentRaffle.sneaker.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">{currentRaffle.sneaker.name}</h3>
                <p className="text-neon-green text-2xl font-bold">${currentRaffle.sneaker.price}</p>
              </div>

              <div className="space-y-6">
                {/* Countdown */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Time Remaining</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Minutes', value: timeLeft.minutes },
                      { label: 'Seconds', value: timeLeft.seconds }
                    ].map((item, index) => (
                      <div key={index} className="text-center bg-dark-800 rounded-lg p-4">
                        <div className="text-2xl font-display font-bold text-neon-green">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entry Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">Entries</span>
                    <span className="text-neon-green">{currentRaffle.totalEntries}/{currentRaffle.maxEntries}</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-neon-green to-neon-purple h-3 rounded-full transition-all duration-500"
                      style={{ width: `${entryPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {currentRaffle.maxEntries - currentRaffle.totalEntries} spots remaining
                  </p>
                </div>

                {/* Entry Options */}
                <div className="space-y-4">
                  <div className="bg-dark-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">Entry Price</span>
                      <span className="text-neon-green font-bold">${currentRaffle.entryPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Your Entries</span>
                      <span className="text-white">{user?.raffleEntries || 0}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Ticket size={20} />
                    <span>Enter Raffle</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Raffle Tabs */}
          <div className="flex space-x-4 mb-6">
            {raffles.map((raffle, index) => (
              <button
                key={raffle.id}
                onClick={() => setActiveRaffle(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeRaffle === index
                    ? 'bg-neon-green text-black'
                    : 'bg-dark-800 text-gray-400 hover:text-white'
                }`}
              >
                Raffle #{raffle.id}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Your Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-800 rounded-xl p-6 border border-dark-700"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4">Your Raffle Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Ticket className="text-neon-green" size={20} />
                  <span className="text-gray-300">Available Entries</span>
                </div>
                <span className="text-neon-green font-bold">{user?.raffleEntries}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Trophy className="text-neon-purple" size={20} />
                  <span className="text-gray-300">Raffles Won</span>
                </div>
                <span className="text-white font-bold">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-gray-300">Win Rate</span>
                </div>
                <span className="text-white font-bold">15%</span>
              </div>
            </div>
          </motion.div>

          {/* Recent Winners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-800 rounded-xl p-6 border border-dark-700"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4">Recent Winners</h3>
            <div className="space-y-4">
              {previousWinners.map((winner, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={winner.avatar}
                    alt={winner.name}
                    className="w-10 h-10 rounded-full border-2 border-neon-green"
                  />
                  <div className="flex-1">
                    <p className="text-white font-medium">{winner.name}</p>
                    <p className="text-gray-400 text-sm">{winner.sneaker}</p>
                  </div>
                  <span className="text-gray-500 text-xs">{winner.date}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-800 rounded-xl p-6 border border-dark-700"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4">How It Works</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>1. Use XP or pay entry fee</p>
              <p>2. Winners drawn randomly</p>
              <p>3. Multiple entries increase odds</p>
              <p>4. Winners notified instantly</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Raffle;