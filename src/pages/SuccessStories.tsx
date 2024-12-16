import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      company: 'Northwest Medical Center',
      logo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80',
      quote: 'HealthQuill transformed our proposal process, reducing time spent by 60% while improving quality.',
      stats: [
        { icon: TrendingUp, label: 'Efficiency Increase', value: '60%' },
        { icon: Clock, label: 'Time Saved Weekly', value: '15 hours' },
        { icon: Users, label: 'Team Members', value: '25+' },
      ],
      contact: 'Dr. Sarah Johnson, Medical Director',
    },
    {
      company: 'Pacific Healthcare Group',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      quote: 'The compliance features alone saved us countless hours and potential issues.',
      stats: [
        { icon: TrendingUp, label: 'Compliance Rate', value: '100%' },
        { icon: Clock, label: 'Implementation Time', value: '1 week' },
        { icon: Award, label: 'Success Rate', value: '95%' },
      ],
      contact: 'Michael Chen, Operations Manager',
    },
  ];

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            See how healthcare providers are transforming their proposal process with HealthQuill
          </motion.p>
        </div>

        <div className="space-y-12 mb-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold mb-4">{story.company}</h2>
                  <blockquote className="text-xl text-gray-600 italic mb-6">
                    "{story.quote}"
                  </blockquote>
                  <p className="text-gray-500">- {story.contact}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Key Results</h3>
                  <div className="grid gap-6">
                    {story.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;