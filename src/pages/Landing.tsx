import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Code, Github, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            W
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">WorkLin</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/fyiclub-vitb/WorkLin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Your workspace,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              reimagined
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            WorkLin is an open-source Notion alternative. Create pages, organize your thoughts,
            and collaborate with your team—all in one beautiful workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Start Creating
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://github.com/fyiclub-vitb/WorkLin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-semibold text-lg flex items-center gap-2"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to stay organized
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Powerful features, beautiful design, open source
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Zap size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with React and Vite for instant page loads and smooth interactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <Shield size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Privacy First
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your data stays yours. Open source means you control your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <Users size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Collaborate
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time collaboration coming soon. Share workspaces and work together seamlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Code size={48} className="mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Open Source & Free</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              WorkLin is open source and free forever. Join our community of contributors
              and help shape the future of workspace tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/fyiclub-vitb/WorkLin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Github size={20} />
                Contribute on GitHub
              </a>
              <Link
                to="/login"
                className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Try Demo
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              W
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">WorkLin</span>
          </div>
          <div className="flex gap-6 text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Issues
            </a>
            <a
              href="https://github.com/fyiclub-vitb/WorkLin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>© 2024 WorkLin. Open source under MIT License.</p>
        </div>
      </footer>
    </div>
  );
};
