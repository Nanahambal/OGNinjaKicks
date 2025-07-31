import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, Eye, TrendingUp, Zap } from 'lucide-react';

const Intel = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'All', label: 'All Intel', count: 12 },
    { id: 'Rumor Mill', label: 'Rumor Mill', count: 4 },
    { id: 'Confirmed Drops', label: 'Confirmed Drops', count: 3 },
    { id: 'Style Guide', label: 'Style Guide', count: 3 },
    { id: 'Collabs', label: 'Collabs', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Jordan 4 Bred Reimagined Confirmed for Q4',
      snippet: 'One of the most anticipated retros is back in a big way. Sources confirm the iconic colorway will feature premium materials...',
      category: 'Confirmed Drops',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 3,
      publishDate: '2 hours ago',
      views: 1247
    },
    {
      id: 2,
      title: 'Travis Scott x Nike: What\'s Next After Fragment?',
      snippet: 'Exclusive intel on the next collaboration between the Houston rapper and the Swoosh. Multiple colorways in development...',
      category: 'Rumor Mill',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 5,
      publishDate: '6 hours ago',
      views: 2156
    },
    {
      id: 3,
      title: 'How to Style Your Jordan 1s: OG Ninja Guide',
      snippet: 'From streetwear to smart casual, our style ninjas break down the best ways to rock your Chicago 1s in any season...',
      category: 'Style Guide',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 4,
      publishDate: '1 day ago',
      views: 892
    },
    {
      id: 4,
      title: 'Off-White x Nike: The End of an Era?',
      snippet: 'With Virgil\'s passing, what does the future hold for one of sneaker culture\'s most influential collaborations...',
      category: 'Collabs',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 6,
      publishDate: '2 days ago',
      views: 3421
    },
    {
      id: 5,
      title: 'Dunk Low "Panda" Restock: When & Where',
      snippet: 'The most sought-after Dunk is coming back. Here\'s everything you need to know about securing your pair...',
      category: 'Confirmed Drops',
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 2,
      publishDate: '3 days ago',
      views: 1876
    },
    {
      id: 6,
      title: 'Yeezy 350 V3: First Look at Kanye\'s Next Move',
      snippet: 'Leaked images suggest a complete redesign for the next generation of 350s. Revolutionary or too radical?',
      category: 'Rumor Mill',
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      readTime: 4,
      publishDate: '4 days ago',
      views: 2743
    }
  ];

  const upcomingReleases = [
    { date: 'Dec 15', sneaker: 'Jordan 4 "Bred"', status: 'Confirmed' },
    { date: 'Dec 22', sneaker: 'Dunk Low "Chicago"', status: 'Rumored' },
    { date: 'Jan 5', sneaker: 'Yeezy 350 "Bone"', status: 'Confirmed' },
    { date: 'Jan 12', sneaker: 'Travis Scott Low', status: 'Rumored' }
  ];

  const topReads = [
    'Jordan 4 Bred Reimagined Confirmed for Q4',
    'Travis Scott x Nike: What\'s Next?',
    'Off-White x Nike: End of an Era?',
    'Yeezy 350 V3: First Look'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.snippet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            INTEL <span className="text-neon-green">ROOM</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Get the lowdown before the drop goes down.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 mb-8"
            >
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-neon-green to-neon-purple text-black'
                        : 'bg-dark-800/50 text-gray-400 hover:text-white hover:bg-dark-700/50'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search drop names..."
                  className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Articles Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800/50 group hover:border-neon-green/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        article.category === 'Confirmed Drops' ? 'bg-neon-green/20 text-neon-green' :
                        article.category === 'Rumor Mill' ? 'bg-neon-purple/20 text-neon-purple' :
                        article.category === 'Style Guide' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2 text-white/80 text-sm">
                      <Eye size={14} />
                      <span>{article.views}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.snippet}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{article.readTime} min read</span>
                        </div>
                        <span>{article.publishDate}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-neon-green/20 to-neon-purple/20 text-white font-semibold py-3 rounded-xl hover:from-neon-green/30 hover:to-neon-purple/30 transition-all duration-300 border border-gray-700/50">
                      READ MORE
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Releases */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider flex items-center">
                <Calendar className="mr-2 text-neon-green" size={20} />
                UPCOMING RELEASES
              </h3>
              <div className="space-y-4">
                {upcomingReleases.map((release, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-dark-800/50 rounded-xl">
                    <div>
                      <p className="text-white font-semibold text-sm">{release.sneaker}</p>
                      <p className="text-gray-400 text-xs">{release.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      release.status === 'Confirmed' 
                        ? 'bg-neon-green/20 text-neon-green' 
                        : 'bg-neon-purple/20 text-neon-purple'
                    }`}>
                      {release.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Reads */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider flex items-center">
                <TrendingUp className="mr-2 text-neon-purple" size={20} />
                TOP READS THIS WEEK
              </h3>
              <div className="space-y-3">
                {topReads.map((title, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 bg-dark-800/50 rounded-xl hover:bg-dark-700/50 transition-colors group"
                  >
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {title}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Intel Alert */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-2xl p-6 border border-neon-green/30"
            >
              <div className="text-center">
                <Zap className="mx-auto mb-4 text-neon-green" size={32} />
                <h3 className="text-lg font-display font-black text-white mb-2 tracking-wider">
                  INTEL ALERTS
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified when breaking news drops
                </p>
                <button className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300">
                  <span onClick={() => alert('🔔 Intel Alerts Enabled!\n\nYou will now receive notifications for breaking sneaker news and exclusive drops!')}>
                    ENABLE ALERTS
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intel;