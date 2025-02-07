import React from 'react';
import { Eye, GitBranch, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enhanced Attendance Tracking System",
      description: "Using Facial Recognition, Face Spoofing, and Object Detection to prevent fraudulent activities in educational institutions.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "OpenCV", "Deep Learning", "Face Recognition"],
      type: "Main Project"
    },
    {
      title: "LLM-powered UPI Fraud Detection",
      description: "Leveraging Large Language Models to detect suspicious transaction patterns in digital payments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "Machine Learning", "Python", "LLMs"],
      type: "Side Project"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  {project.type}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between border-t pt-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
                    <Eye size={20} />
                    <span className="font-medium">Live Demo</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50">
                    <GitBranch size={20} />
                    <span className="font-medium">Source Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects