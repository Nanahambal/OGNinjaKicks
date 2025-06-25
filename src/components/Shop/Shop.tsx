import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Clock, ShoppingCart } from 'lucide-react';

const Shop = () => {
  const [activeTab, setActiveTab] = useState<'Early Access' | 'Exclusive Drops' | 'Archive'>('Early Access');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const sneakers = [
    {
      id: 1,
      name: 'Air Jordan 1 "Shadow Ninja"',
      brand: 'Jordan',
      price: 650,
      originalPrice: 750,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Early Access',
      sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11'],
      timeLeft: '2 days',
      rating: 4.9,
      isExclusive: true
    },
    {
      id: 2,
      name: 'Nike Dunk Low "Dojo Edition"',
      brand: 'Nike',
      price: 420,
      image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Exclusive Drops',
      sizes: ['7', '8', '9', '10', '11', '12'],
      timeLeft: '5 hours',
      rating: 4.8,
      isExclusive: true
    },
    {
      id: 3,
      name: 'Yeezy 350 V2 "Stealth"',
      brand: 'Adidas',
      price: 380,
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Archive',
      sizes: ['8.5', '9', '9.5', '10', '10.5', '11', '11.5'],
      rating: 4.7,
      isExclusive: false
    },
    {
      id: 4,
      name: 'Travis Scott x Fragment',
      brand: 'Jordan',
      price: 1200,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Early Access',
      sizes: ['9', '9.5', '10', '10.5'],
      timeLeft: '12 hours',
      rating: 5.0,
      isExclusive: true
    }
  ];

  const filteredSneakers = sneakers.filter(sneaker => sneaker.category === activeTab);

  const tabs = [
    { id: 'Early Access', label: 'Early Access', count: 2 },
    { id: 'Exclusive Drops', label: 'Exclusive Drops', count: 1 },
    { id: 'Archive', label: 'Archive', count: 1 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Ninja Vault</h1>
          <p className="text-gray-400">Exclusive access to the rarest drops</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 bg-dark-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-neon-green text-black' : 'text-gray-400'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-neon-green text-black' : 'text-gray-400'}`}
            >
              <List size={20} />
            </button>
          </div>
          <button className="flex items-center space-x-2 bg-dark-800 text-white px-4 py-2 rounded-lg hover:bg-dark-700 transition-colors">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-dark-800 rounded-lg p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-neon-green text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}
      >
        {filteredSneakers.map((sneaker, index) => (
          <motion.div
            key={sneaker.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-dark-800 rounded-xl border border-dark-700 overflow-hidden group hover:border-neon-green/50 transition-all duration-300 ${
              viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''
            }`}
          >
            <div className={`relative ${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
              <img
                src={sneaker.image}
                alt={sneaker.name}
                className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                  viewMode === 'list' ? 'w-32 h-24 rounded-lg' : 'w-full h-48'
                }`}
              />
              {sneaker.isExclusive && (
                <div className="absolute top-3 left-3 bg-neon-green text-black text-xs font-bold px-2 py-1 rounded">
                  EXCLUSIVE
                </div>
              )}
              {sneaker.timeLeft && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{sneaker.timeLeft}</span>
                </div>
              )}
            </div>

            <div className={`flex-1 ${viewMode === 'list' ? '' : 'p-6'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-neon-purple text-sm font-medium">{sneaker.brand}</span>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-gray-400 text-sm">{sneaker.rating}</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-green transition-colors">
                {sneaker.name}
              </h3>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-neon-green font-bold text-xl">${sneaker.price}</span>
                {sneaker.originalPrice && (
                  <span className="text-gray-400 line-through">${sneaker.originalPrice}</span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Available sizes:</p>
                <div className="flex flex-wrap gap-2">
                  {sneaker.sizes.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="bg-dark-700 text-white text-xs px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {sneaker.sizes.length > 4 && (
                    <span className="text-gray-400 text-xs">+{sneaker.sizes.length - 4} more</span>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredSneakers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No sneakers available in this category yet.</p>
          <p className="text-gray-500 text-sm mt-2">Check back soon for exclusive drops!</p>
        </div>
      )}
    </div>
  );
};

export default Shop;