import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Lock, ArrowLeft, Tag, Zap } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, itemCount, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const promoCodes = {
    'NINJA10': { discount: 0.1, description: '10% off your order' },
    'SHADOW20': { discount: 0.2, description: '20% off for Shadow Masters' },
    'FIRSTDROP': { discount: 0.15, description: '15% off first purchase' }
  };

  const handlePromoCode = () => {
    const promo = promoCodes[promoCode.toUpperCase() as keyof typeof promoCodes];
    if (promo) {
      setAppliedPromo(promoCode.toUpperCase());
      setDiscount(promo.discount);
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setDiscount(0);
  };

  const subtotal = totalPrice;
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 500 ? 0 : 50; // Free shipping over ₹500
  const finalTotal = subtotal - discountAmount + shipping;

  const handleCheckout = () => {
    alert(`🎉 Checkout initiated!\n\nTotal: ₹${finalTotal.toFixed(2)}\nItems: ${itemCount}\n\nIn a real app, this would redirect to payment processing.`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-dark-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-dark-800/50 rounded-full flex items-center justify-center">
              <ShoppingCart className="text-gray-400" size={48} />
            </div>
            <h1 className="text-4xl font-display font-black text-white mb-4 tracking-wider">
              YOUR CART IS <span className="text-neon-green">EMPTY</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Time to fill it with some heat! 🔥
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-neon-green to-neon-purple text-black font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span>Browse Vault</span>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

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
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h1 className="text-5xl font-display font-black text-white mb-4 tracking-wider">
              NINJA <span className="text-neon-green">CART</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              {itemCount} item{itemCount !== 1 ? 's' : ''} ready for checkout
            </p>
          </div>
          <Link
            to="/shop"
            className="flex items-center space-x-2 text-neon-green hover:text-neon-purple transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-800/50">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-display font-black text-white tracking-wider">
                    YOUR ITEMS
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 transition-colors text-sm font-semibold uppercase tracking-wider"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-800/50">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 hover:bg-dark-800/30 transition-colors"
                  >
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-18 object-cover rounded-xl"
                        />
                        {item.isExclusive && (
                          <div className="absolute -top-2 -right-2 bg-neon-green text-black text-xs font-bold px-2 py-1 rounded-full">
                            VIP
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-white font-bold text-lg">{item.name}</h3>
                            <p className="text-neon-purple text-sm font-medium">{item.brand}</p>
                            <p className="text-gray-400 text-sm">Size: {item.selectedSize}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-red-400 hover:text-red-300 transition-colors p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Price */}
                          <div className="flex items-center space-x-2">
                            <span className="text-neon-green font-bold text-xl">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-gray-400 line-through text-sm">₹{item.originalPrice}</span>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="w-8 h-8 bg-dark-700 text-white rounded-lg flex items-center justify-center hover:bg-dark-600 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="w-8 h-8 bg-neon-green text-black rounded-lg flex items-center justify-center hover:bg-neon-green/90 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-display font-black text-white mb-4 tracking-wider flex items-center">
                <Tag className="mr-2 text-neon-purple" size={20} />
                PROMO CODE
              </h3>
              
              {appliedPromo ? (
                <div className="bg-neon-green/20 border border-neon-green/50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-neon-green font-bold">{appliedPromo}</p>
                      <p className="text-gray-300 text-sm">{promoCodes[appliedPromo as keyof typeof promoCodes].description}</p>
                    </div>
                    <button
                      onClick={removePromo}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-3 bg-dark-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-green/50"
                  />
                  <button
                    onClick={handlePromoCode}
                    className="bg-neon-purple text-white px-4 py-3 rounded-xl hover:bg-neon-purple/90 transition-colors font-semibold"
                  >
                    Apply
                  </button>
                </div>
              )}
              
              <div className="mt-4 text-xs text-gray-400">
                <p>Try: NINJA10, SHADOW20, FIRSTDROP</p>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-neon-purple/20 via-black/40 to-neon-green/20 rounded-2xl p-6 border border-neon-green/30 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-purple/5"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-display font-black text-white mb-6 tracking-wider">
                  ORDER SUMMARY
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Subtotal ({itemCount} items)</span>
                    <span className="text-white font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-neon-green">Discount ({appliedPromo})</span>
                      <span className="text-neon-green font-semibold">-₹{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Shipping</span>
                    <span className={`font-semibold ${shipping === 0 ? 'text-neon-green' : 'text-white'}`}>
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-xs text-gray-400">
                      <Zap className="inline mr-1" size={12} />
                      Free shipping on orders over ₹500
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700/50 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-lg">Total</span>
                    <span className="text-neon-green font-black text-2xl">₹{finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-purple text-black font-black py-4 rounded-xl hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 uppercase tracking-wider flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard size={20} />
                  <span>Secure Checkout</span>
                </motion.button>

                <div className="mt-4 flex items-center justify-center space-x-2 text-gray-400 text-sm">
                  <Lock size={14} />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>
              </div>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
            >
              <h3 className="text-lg font-display font-black text-white mb-4 tracking-wider">
                PAYMENT METHODS
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-neon-green font-semibold mb-2">UPI Payments</h4>
                  <div className="text-gray-400 space-y-1">
                    <div>• Google Pay</div>
                    <div>• PhonePe</div>
                    <div>• Paytm</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-neon-purple font-semibold mb-2">Cards</h4>
                  <div className="text-gray-400 space-y-1">
                    <div>• Visa</div>
                    <div>• Mastercard</div>
                    <div>• RuPay</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;