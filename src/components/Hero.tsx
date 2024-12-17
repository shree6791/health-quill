import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Shield, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionBackground from './SectionBackground';

const Hero = () => {
  const [activeFeature, setActiveFeature] = React.useState(0);
  const features = [
    'AI-Powered RFP Generation',
    'Compliance Auto-Verification',
    'Real-time Collaboration',
    'Smart Template Library'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionBackground className="h-screen">
      <div className="container h-full mx-auto px-4 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50/80 text-primary-600 font-medium text-sm backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2" />
              AI-Enhanced RFP Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-gray-900">
              Transform Your
              <div className="relative mt-2">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Healthcare RFPs
                </span>
              </div>
            </h1>

            <div className="h-16">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl text-gray-600"
                >
                  {features[activeFeature]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/try-now"
                className="neural-button"
              >
                <span className="relative flex items-center justify-center text-lg font-medium text-white">
                  Generate Your First RFP
                  <Zap className="ml-2 h-5 w-5" />
                </span>
              </Link>

              <button className="px-8 py-4 bg-white rounded-xl border border-gray-200 shadow-soft hover:shadow-lg transition-all duration-300 text-gray-700">
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2940"
                alt="Healthcare Professional using HealthQuill"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 p-6 bg-white rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">RFP Generated</h3>
                  <p className="text-sm text-gray-600">HIPAA Compliant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-900">100% Compliant</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionBackground>
  );
};

export default Hero;