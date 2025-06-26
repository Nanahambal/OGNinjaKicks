import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Shield, Crown, Check, Smartphone, ArrowLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (you'll need to add your publishable key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_...');

interface PaymentFormProps {
  onPaymentSuccess: (paymentIntentId: string) => void;
  onBack: () => void;
  userEmail: string;
  userName: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess, onBack, userEmail, userName }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('upi');

  const plans = {
    monthly: {
      price: 2499, // ₹24.99
      period: 'month',
      savings: null,
      description: 'Full access to all ninja features'
    },
    yearly: {
      price: 24999, // ₹249.99
      period: 'year',
      savings: '₹49.89',
      description: 'Best value - 2 months free!'
    }
  };

  const features = [
    'Exclusive sneaker drops',
    'Weekly raffle entries',
    'Early access to releases',
    'Ninja XP system',
    'VIP customer support',
    'Community access',
    'Drop alerts & intel',
    'Member-only events'
  ];

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      // In a real implementation, you would:
      // 1. Create a payment intent on your backend with INR currency
      // 2. Use Stripe Elements for secure card collection or UPI
      // 3. Confirm the payment
      // 4. Handle the result

      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulate successful payment
      const mockPaymentIntentId = `pi_${Date.now()}_mock_inr`;
      onPaymentSuccess(mockPaymentIntentId);
      
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return `₹${(price / 100).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-purple rounded-full blur-lg opacity-40 animate-pulse"></div>
            <img 
              src="/ChatGPT Image Jun 20, 2025, 12_08_38 PM.png" 
              alt="OG Ninja Kicks" 
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          
          <h1 className="text-4xl font-display font-black text-white mb-3 tracking-wider">
            UNLOCK THE <span className="text-neon-green">DOJO</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-2">
            Welcome, <span className="text-neon-purple font-bold">{userName}</span>
          </p>
          <p className="text-gray-500">
            Choose your ninja membership to complete registration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plan Selection & Payment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50"
          >
            <h2 className="text-2xl font-display font-black text-white mb-6 tracking-wider">
              CHOOSE YOUR PLAN
            </h2>

            {/* Plan Selection */}
            <div className="space-y-4 mb-8">
              {/* Monthly Plan */}
              <div
                onClick={() => setSelectedPlan('monthly')}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlan === 'monthly'
                    ? 'border-neon-green bg-neon-green/10'
                    : 'border-gray-700/50 bg-dark-800/50 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">Monthly Ninja</h3>
                  <div className="text-right">
                    <div className="text-2xl font-display font-black text-neon-green">
                      {formatPrice(plans.monthly.price)}
                    </div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{plans.monthly.description}</p>
              </div>

              {/* Yearly Plan */}
              <div
                onClick={() => setSelectedPlan('yearly')}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 relative ${
                  selectedPlan === 'yearly'
                    ? 'border-neon-purple bg-neon-purple/10'
                    : 'border-gray-700/50 bg-dark-800/50 hover:border-gray-600/50'
                }`}
              >
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-neon-green to-neon-purple text-black text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">Yearly Ninja</h3>
                  <div className="text-right">
                    <div className="text-2xl font-display font-black text-neon-purple">
                      {formatPrice(plans.yearly.price)}
                    </div>
                    <div className="text-gray-400 text-sm">per year</div>
                    <div className="text-neon-green text-xs font-bold">Save {plans.yearly.savings}</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{plans.yearly.description}</p>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-4">Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    paymentMethod === 'upi'
                      ? 'border-neon-green bg-neon-green/10'
                      : 'border-gray-700/50 bg-dark-800/50 hover:border-gray-600/50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Smartphone className="text-neon-green" size={20} />
                    <span className="text-white font-semibold">UPI</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">GPay, PhonePe, Paytm</p>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    paymentMethod === 'card'
                      ? 'border-neon-purple bg-neon-purple/10'
                      : 'border-gray-700/50 bg-dark-800/50 hover:border-gray-600/50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <CreditCard className="text-neon-purple" size={20} />
                    <span className="text-white font-semibold">Card</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Visa, Mastercard, RuPay</p>
                </button>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-dark-800/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Plan</span>
                <span className="text-gray-300">{selectedPlan === 'monthly' ? 'Monthly' : 'Yearly'} Ninja</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Payment Method</span>
                <span className="text-gray-300 capitalize flex items-center space-x-1">
                  {paymentMethod === 'upi' ? <Smartphone size={16} /> : <CreditCard size={16} />}
                  <span>{paymentMethod.toUpperCase()}</span>
                </span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-neon-green font-bold text-xl">{formatPrice(plans[selectedPlan].price)}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <motion.button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 disabled:opacity-50 relative overflow-hidden group mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center justify-center space-x-2">
                {paymentMethod === 'upi' ? <Smartphone size={20} /> : <CreditCard size={20} />}
                <span className="text-lg font-black tracking-wider">
                  {loading ? 'PROCESSING...' : `PAY ${formatPrice(plans[selectedPlan].price)} - JOIN DOJO`}
                </span>
              </div>
            </motion.button>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-400 text-sm mb-4">
                {error}
              </div>
            )}

            {/* Back Button */}
            <button
              onClick={onBack}
              className="w-full border border-gray-600 text-gray-300 font-semibold py-3 rounded-xl hover:bg-gray-600/10 transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowLeft size={16} />
              <span>Back to Registration</span>
            </button>

            {/* Security Notice */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Lock size={16} />
              <span>Secured by Stripe • 256-bit SSL encryption • PCI DSS compliant</span>
            </div>
          </motion.div>

          {/* Features & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-neon-purple/20 via-black/40 to-neon-green/20 rounded-2xl p-8 border border-neon-green/30 relative overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="text-neon-green" size={32} />
                <h2 className="text-2xl font-display font-black text-white tracking-wider">
                  NINJA PERKS
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-green to-neon-purple rounded-full flex items-center justify-center">
                      <Check className="text-black" size={14} />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Payment Methods Accepted */}
              <div className="bg-black/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Payment Methods Accepted</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-neon-green font-semibold mb-2 flex items-center space-x-2">
                      <Smartphone size={16} />
                      <span>UPI Payments</span>
                    </h4>
                    <div className="text-gray-400 text-sm space-y-1">
                      <div>• Google Pay</div>
                      <div>• PhonePe</div>
                      <div>• Paytm</div>
                      <div>• BHIM UPI</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-neon-purple font-semibold mb-2 flex items-center space-x-2">
                      <CreditCard size={16} />
                      <span>Cards</span>
                    </h4>
                    <div className="text-gray-400 text-sm space-y-1">
                      <div>• Visa</div>
                      <div>• Mastercard</div>
                      <div>• RuPay</div>
                      <div>• American Express</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-neon-green/20 text-neon-green px-4 py-2 rounded-full">
                  <Shield size={16} />
                  <span className="font-semibold text-sm">7-Day Money Back Guarantee</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Not satisfied? Get a full refund within 7 days, no questions asked.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentForm;