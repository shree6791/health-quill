import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Medical Director',
    company: 'Northwest Health Center',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'HealthQuill has transformed how we create and manage healthcare proposals. The automation features have saved us countless hours.'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Pacific Medical Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    content: 'The compliance features give us peace of mind, knowing our proposals meet all regulatory requirements.'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'CEO',
    company: 'Healthcare Solutions Inc.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    content: 'Since implementing HealthQuill, our proposal acceptance rate has increased by 60%. The results speak for themselves.'
  }
];

const Testimonials = () => {
  return (
    <SectionBackground variant="tertiary" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by Healthcare Leaders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of healthcare professionals who trust HealthQuill for their RFP needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default Testimonials;