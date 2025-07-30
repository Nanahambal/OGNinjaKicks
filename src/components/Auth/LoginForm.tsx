import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Shield, UserPlus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PaymentForm from './PaymentForm';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { signIn, signUp, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (isSignUp) {
        if (!name.trim()) {
          setError('Name is required');
          return;
        }
        // For signup, show payment form instead of creating account immediately
        setShowPayment(true);
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error);
        }
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    setLoading(true);
    try {
      // Now create the account after successful payment
      const { error } = await signUp(email, password, name);
      if (error) {
        setError(error);
        setShowPayment(false);
      } else {
        setMessage('Account created successfully! Check your email for verification.');
        // You would also want to store the payment information in your database here
        console.log('Payment successful:', paymentIntentId);
      }
    } catch (error) {
      setError('Account creation failed after payment. Please contact support.');
      setShowPayment(false);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email first');
      return;
    }

    setLoading(true);
    setError('');
    const { error } = await resetPassword(email);
    
    if (error) {
      setError(error);
    } else {
      setMessage('Password reset email sent!');
    }
    setLoading(false);
  };

  // Show payment form if user is signing up and has filled basic info
  if (showPayment) {
    return (
      <PaymentForm
        onPaymentSuccess={handlePaymentSuccess}
        onBack={() => setShowPayment(false)}
        userEmail={email}
        userName={name}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-green/3 to-neon-purple/3 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <motion.div 
            className="inline-flex items-center justify-center w-32 h-32 mb-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img 
              src="/ChatGPT Image Jun 20, 2025, 12_08_38 PM.png" 
              alt="OG Ninja Kicks" 
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-4xl font-display font-black text-white mb-3 tracking-wider">
              {isSignUp ? 'JOIN THE' : 'ONLY'} <span className="text-neon-green">DOJO</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium">
              {isSignUp ? 'Become a ninja. Access the vault.' : 'Enter the underground. Access the vault.'}
            </p>
          </motion.div>
        </div>

        {/* Auth Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5 rounded-2xl"></div>
          
          <div className="relative z-10 space-y-6">
            {/* Error/Success Messages */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-400 text-sm">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-neon-green/20 border border-neon-green/50 rounded-xl p-3 text-neon-green text-sm">
                {message}
              </div>
            )}

            {/* Membership Notice for Sign Up */}
            {isSignUp && (
              <div className="bg-gradient-to-r from-neon-purple/20 to-neon-green/20 border border-neon-green/30 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="text-neon-green" size={16} />
                  <span className="text-neon-green font-bold text-sm uppercase tracking-wider">Premium Membership</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Join our exclusive ninja community with premium membership starting at <span className="text-neon-green font-bold">₹24.99/month</span>. 
                  Payment required to complete registration.
                </p>
                
                {/* Membership Benefits */}
                <div className="mt-4 space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">What You Get:</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                      <span>Exclusive sneaker drops before anyone else</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                      <span>Weekly raffle entries for rare releases</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                      <span>Ninja XP system with exclusive rewards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                      <span>VIP customer support & priority access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-neon-green rounded-full"></div>
                      <span>Community access & member-only events</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Name Field (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                  Ninja Name
                </label>
                <div className="relative">
                  <UserPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-dark-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Enter your ninja name"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                Email Access Code
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder="ninja@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                Secret Dojo Key
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-dark-800/80 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all duration-300 backdrop-blur-sm"
                  placeholder={isSignUp ? "Create a strong password" : "Enter your secret code"}
                  required
                  minLength={isSignUp ? 6 : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <Shield size={20} />
                <span className="text-lg font-black tracking-wider">
                  {loading 
                    ? (isSignUp ? 'PROCESSING...' : 'ACCESSING DOJO...') 
                    : (isSignUp ? 'CONTINUE TO PAYMENT' : 'UNLOCK THE DOJO')
                  }
                </span>
              </div>
            </motion.button>

            {/* Toggle Sign Up/Sign In */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setMessage('');
                  setShowPayment(false);
                }}
                className="text-neon-green hover:text-neon-purple transition-colors font-semibold"
              >
                {isSignUp ? 'Already a ninja? Sign in' : 'New ninja? Join the dojo'}
              </button>
            </div>

            {/* Forgot Password */}
            {!isSignUp && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  disabled={loading}
                >
                  Forgot your secret code?
                </button>
              </div>
            )}
          </div>
        </motion.form>

        {/* VIP Features Preview */}
        <motion.div 
          className="mt-10 grid grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="group">
            <div className="text-neon-green font-black text-xl mb-1 group-hover:scale-110 transition-transform">EXCLUSIVE</div>
            <div className="text-gray-400 text-sm font-medium">Jordan Drops</div>
          </div>
          <div className="group">
            <div className="text-neon-purple font-black text-xl mb-1 group-hover:scale-110 transition-transform">WEEKLY</div>
            <div className="text-gray-400 text-sm font-medium">Raffles</div>
          </div>
          <div className="group">
            <div className="text-neon-green font-black text-xl mb-1 group-hover:scale-110 transition-transform">LOYALTY</div>
            <div className="text-gray-400 text-sm font-medium">XP System</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;