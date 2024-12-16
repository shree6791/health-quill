import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, FileCheck, BarChart, Brain } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered RFP Generation',
      description: 'Generate comprehensive healthcare RFPs in minutes with our advanced AI technology.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay compliant with healthcare regulations and industry standards automatically.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration features and approval workflows.'
    },
    {
      icon: FileCheck,
      title: 'Smart Templates',
      description: 'Access a library of customizable, industry-specific RFP templates.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track proposal performance and optimize your success rate with data-driven insights.'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your RFP process with intelligent automation and approval routing.'
    }
  ];

  return (
    <PageLayout 
      title="Powerful Features for Healthcare RFPs"
      description="Everything you need to create winning healthcare proposals"
      variant="secondary"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
              <feature.icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Feature Demo Section */}
      <motion.div
        className="bg-white rounded-xl p-8 shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">See It in Action</h2>
            <p className="text-gray-600 mb-6">
              Watch how HealthQuill transforms your RFP process with intelligent automation
              and compliance checks.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl shadow-soft hover:shadow-lg transition-all">
              Watch Demo
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="HealthQuill Platform Demo"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Features;