import React from 'react';
import { FileText, Shield, Clock, Users, BarChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const benefits = [
  {
    icon: FileText,
    title: 'Smart RFP Generation',
    description: 'AI-powered system creates comprehensive healthcare RFPs in minutes, not hours.',
    metric: '75% faster proposal creation'
  },
  {
    icon: Shield,
    title: 'Compliance Assurance',
    description: 'Automatic verification against healthcare regulations and standards.',
    metric: '100% compliance rate'
  },
  {
    icon: Clock,
    title: 'Time Optimization',
    description: 'Streamlined workflow reduces RFP creation time significantly.',
    metric: 'Save 20+ hours per RFP'
  },
  {
    icon: Users,
    title: 'Collaborative Platform',
    description: 'Real-time collaboration with team members and stakeholders.',
    metric: '5x faster approvals'
  },
  {
    icon: BarChart,
    title: 'Success Analytics',
    description: 'Track proposal performance and optimize win rates.',
    metric: '40% higher success rate'
  },
  {
    icon: Zap,
    title: 'Instant Templates',
    description: 'Access pre-approved, customizable healthcare RFP templates.',
    metric: '1000+ templates available'
  }
];

const Benefits = () => {
  return (
    <SectionBackground variant="secondary" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Streamline Your RFP Process
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transform your healthcare proposal workflow with intelligent automation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-primary-600">{benefit.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

export default Benefits;