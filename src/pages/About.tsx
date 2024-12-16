import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const About = () => {
  const stats = [
    { icon: Users, label: 'Healthcare Providers', value: '1,000+' },
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Target, label: 'RFPs Generated', value: '50,000+' },
    { icon: Clock, label: 'Hours Saved', value: '100,000+' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: '15+ years in healthcare technology',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Former Tech Lead at major health systems',
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      bio: 'Specialist in healthcare compliance',
    },
  ];

  return (
    <PageLayout 
      title="About HealthQuill"
      description="Transforming healthcare RFP generation through innovation and expertise"
    >
      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mx-auto bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <stat.icon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          To revolutionize healthcare RFP generation by providing innovative solutions that save time, 
          ensure compliance, and improve outcomes for healthcare providers worldwide.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-primary-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default About;