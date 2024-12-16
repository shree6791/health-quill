import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is HealthQuill?',
      answer: 'HealthQuill is a platform that simplifies healthcare proposal generation through automation, compliance checks, and intelligent templates.'
    },
    {
      question: 'How does the pricing work?',
      answer: 'We offer two main pricing tiers: a monthly subscription for small clinics and teams, and a lifetime purchase option for hospitals and larger organizations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. All data is encrypted and we comply with HIPAA and other healthcare data protection standards.'
    },
    {
      question: 'Can I try before I buy?',
      answer: 'Yes, we offer a free demo where you can explore all features and see how HealthQuill can benefit your organization.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation typically takes 1-2 weeks, including team training and customization of templates.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Find answers to common questions about HealthQuill
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-teal-500" />
                ) : (
                  <Plus className="h-5 w-5 text-teal-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;