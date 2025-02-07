import React from 'react';
import { Code, Terminal, Database, MessageSquare, PenTool as Tool, Brain } from 'lucide-react';

const Skills = () => {
  const skills = {
    technical: [
      { name: "Python", icon: <Code size={24} /> },
      { name: "Core Java", icon: <Code size={24} /> },
      { name: "SQL", icon: <Database size={24} /> }
    ],
    soft: [
      { name: "Work Ethic", icon: <Brain size={24} /> },
      { name: "Communication", icon: <MessageSquare size={24} /> },
      { name: "Creativity", icon: <Tool size={24} /> },
      { name: "Adaptability", icon: <Brain size={24} /> }
    ],
    tools: [
      { name: "Eclipse", icon: <Terminal size={24} /> },
      { name: "GitHub", icon: <Code size={24} /> },
      { name: "Google Colab", icon: <Terminal size={24} /> },
      { name: "VS Code", icon: <Code size={24} /> }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skills.technical.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="text-blue-600">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="text-blue-600">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Tool className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Tools & Software</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skills.tools.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="text-blue-600">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills