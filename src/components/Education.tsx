import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in AI & ML",
      institution: "Manakula Vinayagar Institute of Technology, Puducherry",
      year: "2021-2025",
      score: "CGPA: 7.33/10 (73.3%)",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "12th Grade (CBSE)",
      institution: "Aditya Vidyashram Residential School, Puducherry",
      year: "2020-2021",
      score: "82.4%",
      icon: <School className="w-6 h-6" />
    },
    {
      degree: "10th Grade (CBSE)",
      institution: "Aditya Vidyashram Residential School, Puducherry",
      year: "2018-2019",
      score: "78.4%",
      icon: <School className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
          Academic <span className="text-blue-600">Journey</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>
          
          {/* Education items */}
          <div className="space-y-16">
            {education.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{item.icon}</div>
                      <h3 className="text-xl font-bold text-blue-600">{item.degree}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 font-medium">{item.institution}</p>
                      <p className="text-gray-500 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                        {item.year}
                      </p>
                      <p className="text-blue-600 font-semibold flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                        {item.score}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education