import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import StripePayment from './StripePayment';
import SectionBackground from './SectionBackground';

const PricingCard = ({ title, price, features, isPopular = false, onGetStarted }) => (
  <motion.div
    className={`bg-white rounded-xl p-8 shadow-lg relative flex flex-col ${
      isPopular ? 'border-2 border-primary-500' : ''
    }`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    {isPopular && (
      <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-900">${price}</span>
      {price !== 'Custom' && <span className="text-gray-600">/month</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Check className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={onGetStarted}
      className={`w-full py-3 rounded-lg font-medium transition-all ${
        isPopular
          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      Get Started
    </button>
  </motion.div>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const plans = [
    {
      title: 'Monthly Subscription',
      price: '99',
      features: [
        'Up to 10 team members',
        'Basic proposal templates',
        'Standard compliance checks',
        'Email support',
        'Basic analytics',
      ],
    },
    {
      title: 'Lifetime Purchase',
      price: 'Custom',
      features: [
        'Unlimited team members',
        'Advanced proposal templates',
        'Advanced compliance checks',
        '24/7 priority support',
        'Advanced analytics & reporting',
        'Custom branding',
        'API access',
      ],
      isPopular: true,
    },
  ];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setIsPaymentOpen(true);
  };

  return (
    <SectionBackground variant="secondary" className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              onGetStarted={() => handleGetStarted(plan)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Not ready to commit? <a href="/try-now" className="text-primary-600 hover:text-primary-700 font-medium">Start with a 14-day free trial</a>
          </p>
        </div>
      </div>

      {selectedPlan && (
        <StripePayment
          isOpen={isPaymentOpen}
          onClose={() => {
            setIsPaymentOpen(false);
            setSelectedPlan(null);
          }}
          plan={selectedPlan}
        />
      )}
    </SectionBackground>
  );
};

export default Pricing;