import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2940&q=80"
          alt="AI Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Mujibur Rahman N
          </h1>
          <div className="inline-block">
            <p className="text-xl sm:text-3xl text-blue-600 font-semibold px-6 py-2 border-2 border-blue-200 rounded-full bg-white/50 backdrop-blur-sm">
              Aspiring AI/ML Engineer | Innovator in AI-Powered Solutions
            </p>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about leveraging artificial intelligence and machine learning to solve real-world problems.
            Committed to pushing the boundaries of what's possible in AI technology.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/mujibur-rahman-n-127425322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:muji.techie@gmail.com"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero