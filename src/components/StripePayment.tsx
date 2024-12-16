import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key'); // Replace with your Stripe publishable key

interface StripePaymentProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    title: string;
    price: string;
    features: string[];
  };
}

const StripePayment: React.FC<StripePaymentProps> = ({ isOpen, onClose, plan }) => {
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make an API call to your backend to create a Stripe Checkout Session
    // For demo purposes, we'll just show an alert
    alert('In production, this would redirect to Stripe Checkout');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Subscribe to {plan.title}</h2>
            
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">
                ${plan.price}
                {plan.price !== 'Custom' && <span className="text-lg text-gray-600">/month</span>}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Proceed to Payment
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Payments are processed securely through Stripe
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StripePayment;