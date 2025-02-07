import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl transform group-hover:scale-105 transition duration-500">
                <img
                  src="/muji photo.jpg"
                  alt="Mujibur Rahman N"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">🎯</span>
                Career Objective
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To join a prestigious organization where I can embrace challenges, contribute to objectives,
                and advance my career through dedication and continuous learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">💡</span>
                Professional Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As an aspiring AI/ML engineer, I am deeply passionate about artificial intelligence and its potential
                to transform industries. My academic journey in B.Tech AI & ML has equipped me with strong foundations
                in machine learning, deep learning, and data analytics. I am constantly exploring new technologies
                and methodologies to stay at the forefront of AI innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About