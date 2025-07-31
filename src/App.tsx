import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout/Layout';
import LoginForm from './components/Auth/LoginForm';
import ResetPassword from './components/Auth/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Raffle from './components/Raffle/Raffle';
import Intel from './components/Intel/Intel';
import XPZone from './components/XPZone/XPZone';
import HallOfFame from './components/HallOfFame/HallOfFame';
import Profile from './components/Profile/Profile';

// Placeholder components for other pages
const Help = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
          NINJA <span className="text-neon-green">SUPPORT</span>
        </h1>
        <p className="text-xl text-gray-400 font-medium">
          Need help? Our support ninjas are here for you.
        </p>
      </div>
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 text-center">
        <p className="text-gray-400 text-lg">Support system and FAQs coming soon...</p>
        <button className="mt-6 bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider">
          <span onClick={() => alert('🥷 Ninja Support Summoned!\n\nA support ninja will contact you within 24 hours.\n\nFor immediate help:\n📧 support@ogninja.com\n💬 Live chat available 24/7')}>
            🥷 SUMMON A NINJA
          </span>
        </button>
      </div>
    </div>
  </div>
);

// Demo Navigation Component
const DemoNavigation = () => (
  <div className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-neon-green/30">
    <h3 className="text-neon-green font-bold text-sm mb-3 uppercase tracking-wider">Demo Navigation</h3>
    <div className="space-y-2">
      <a
        href="/demo-login"
        className="block bg-neon-purple/20 text-neon-purple px-3 py-2 rounded-lg text-sm font-semibold hover:bg-neon-purple/30 transition-colors"
      >
        📝 Pre-Login Page
      </a>
      <a
        href="/demo-dashboard"
        className="block bg-neon-green/20 text-neon-green px-3 py-2 rounded-lg text-sm font-semibold hover:bg-neon-green/30 transition-colors"
      >
        🏠 Logged-In Dashboard
      </a>
    </div>
  </div>
);

// Demo Login Page (shows login form without auto-login)
const DemoLoginPage = () => {
  return (
    <div>
      <DemoNavigation />
      <LoginForm />
    </div>
  );
};

// Demo Dashboard Page (auto-logged in experience)
const DemoDashboardPage = () => {
  return (
    <div>
      <DemoNavigation />
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
};
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img 
              src="/ChatGPT Image Jun 20, 2025, 12_08_38 PM.png" 
              alt="Loading" 
              className="w-full h-full object-contain relative z-10 animate-spin"
            />
          </div>
          <p className="text-white font-display font-bold text-xl tracking-wider">ACCESSING DOJO...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Demo Routes */}
            <Route path="/demo-login" element={<DemoLoginPage />} />
            <Route path="/demo-dashboard" element={<DemoDashboardPage />} />
            
            {/* Regular Routes - also work as public demo */}
            <Route path="/login" element={<LoginForm />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Navigate to="/demo-dashboard" replace />} />
            <Route path="/dashboard" element={
              <Layout>
                <Dashboard />
              </Layout>
            } />
            <Route path="/shop" element={
              <Layout>
                <Shop />
              </Layout>
            } />
            <Route path="/cart" element={
              <Layout>
                <Cart />
              </Layout>
            } />
            <Route path="/raffle" element={
              <Layout>
                <Raffle />
              </Layout>
            } />
            <Route path="/news" element={
              <Layout>
                <Intel />
              </Layout>
            } />
            <Route path="/loyalty" element={
              <Layout>
                <XPZone />
              </Layout>
            } />
            <Route path="/members" element={
              <Layout>
                <HallOfFame />
              </Layout>
            } />
            <Route path="/account" element={
              <Layout>
                <Profile />
              </Layout>
            } />
            <Route path="/help" element={
              <Layout>
                <Help />
              </Layout>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;