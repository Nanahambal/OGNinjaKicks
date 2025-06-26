# Payment Integration Setup Guide

## Overview
The OG Ninja Kicks platform now requires payment for membership signup. Users must pay a subscription fee (monthly or yearly) to access the exclusive sneaker community.

## Payment Features Implemented

### 🇮🇳 India-First Payment Experience
- **Currency**: All prices in Indian Rupees (INR)
- **UPI Integration**: Support for Google Pay, PhonePe, Paytm, BHIM UPI
- **Card Support**: Visa, Mastercard, RuPay, American Express
- **Local Payment Methods**: Optimized for Indian users

### 💳 Pricing Plans
- **Monthly Ninja**: ₹24.99/month
- **Yearly Ninja**: ₹249.99/year (Save ₹49.89)

### 🔒 Security Features
- Stripe-powered secure payments
- PCI DSS compliant
- 256-bit SSL encryption
- 7-day money-back guarantee

## Setup Instructions

### 1. Stripe Account Setup

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com)
   - Sign up for a new account
   - Complete business verification

2. **Enable Indian Payments**
   - In Stripe Dashboard → Settings → Payment methods
   - Enable UPI payments
   - Enable Indian card payments
   - Set INR as your primary currency

3. **Get API Keys**
   - Go to Developers → API keys
   - Copy your **Publishable key** (starts with `pk_`)
   - Copy your **Secret key** (starts with `sk_`)

### 2. Environment Variables

Add to your `.env` file:
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

For production, use live keys:
```bash
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
```

### 3. Backend Integration (Required)

**Important**: The current implementation is frontend-only for demo purposes. For production, you need:

1. **Payment Intent Creation**
   ```javascript
   // Backend endpoint: POST /api/create-payment-intent
   const paymentIntent = await stripe.paymentIntents.create({
     amount: 2499, // ₹24.99 in paise
     currency: 'inr',
     payment_method_types: ['card', 'upi'],
     metadata: {
       userId: user.id,
       plan: 'monthly'
     }
   });
   ```

2. **Webhook Handling**
   ```javascript
   // Handle successful payments
   app.post('/webhook', (req, res) => {
     const event = req.body;
     
     if (event.type === 'payment_intent.succeeded') {
       // Activate user membership
       // Update database
       // Send confirmation email
     }
   });
   ```

### 4. UPI Payment Setup

1. **Enable UPI in Stripe**
   - Dashboard → Settings → Payment methods
   - Enable "UPI" under Indian payment methods
   - Configure UPI settings

2. **Test UPI Payments**
   - Use test UPI ID: `success@razorpay`
   - Use test phone: `9999999999`

### 5. Testing

**Test Card Numbers (India)**:
- Visa: `4000 0035 6000 0008`
- Mastercard: `5555 5555 5555 4444`
- RuPay: `6521 1111 1111 1117`

**Test UPI**:
- UPI ID: `success@razorpay`
- Any amount will succeed

## Implementation Details

### Payment Flow
1. User fills registration form
2. Clicks "Continue to Payment"
3. Selects plan (Monthly/Yearly)
4. Chooses payment method (UPI/Card)
5. Completes payment via Stripe
6. Account is created after successful payment
7. User receives confirmation email

### Error Handling
- Payment failures are gracefully handled
- Users can retry payments
- Clear error messages in Hindi/English
- Support contact information provided

### Security Measures
- No sensitive payment data stored locally
- All payments processed through Stripe
- PCI compliance maintained
- User data encrypted

## Production Checklist

- [ ] Stripe account verified and activated
- [ ] Live API keys configured
- [ ] Webhook endpoints set up
- [ ] Payment confirmation emails configured
- [ ] Customer support system ready
- [ ] Refund process documented
- [ ] Tax compliance (GST) handled
- [ ] Terms of service updated
- [ ] Privacy policy updated

## Support

For payment-related issues:
- Email: payments@ogninja.com
- Phone: +91-XXXX-XXXXXX
- Live chat: Available 24/7

## Compliance Notes

- **GST**: Ensure GST registration and invoice generation
- **RBI Guidelines**: Follow RBI guidelines for digital payments
- **Data Protection**: Comply with Indian data protection laws
- **Consumer Rights**: Honor 7-day refund policy

---

**Note**: This is a premium membership platform. All users must complete payment to access exclusive sneaker drops, raffles, and community features.