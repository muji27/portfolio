import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "Amazon Web Services",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20240210-29-deu9lv.pdf"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Skill UP",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/Introduction to Artificial Intelligence.pdf"
    },
    {
      title: "Machine Learning",
      issuer: "Skill UP",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/Machine Learning.pdf"
    },
    {
      title: "Java Programming",
      issuer: "Great Learning",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/Java Programming.pdf"
    },
    {
      title: "R for Data Science",
      issuer: "Great Learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/R for Data Science.pdf"
    },
    {
      title: "SQL for Data Science",
      issuer: "Great Learning",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80",
      pdfPath: "/publicimagescertificates/SQL for Data Science.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
          Professional <span className="text-blue-600">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100"
            >
              <div className="relative h-52">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Award size={20} />
                    </div>
                    <span className="font-semibold text-lg">{cert.issuer}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                <a 
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium group-hover:gap-3"
                >
                  View Certificate
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications