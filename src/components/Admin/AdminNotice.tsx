import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ExternalLink } from 'lucide-react';

const AdminNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-gradient-to-r from-neon-green to-neon-purple p-4 rounded-xl shadow-lg max-w-sm"
    >
      <div className="flex items-start space-x-3">
        <Settings className="text-black mt-1" size={20} />
        <div className="flex-1">
          <h4 className="text-black font-bold text-sm mb-1">Admin Panel Ready!</h4>
          <p className="text-black/80 text-xs mb-2">
            Your content management system is now active. Access it to update sneakers, news, and more.
          </p>
          <a
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-black/20 text-black font-semibold text-xs px-3 py-1 rounded-lg hover:bg-black/30 transition-colors"
          >
            <span>Open Admin</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminNotice;