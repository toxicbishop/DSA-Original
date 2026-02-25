import React from 'react';
import { Briefcase, GraduationCap, MapPin, Mail } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const skills = [
    'Data Structures',
    'Algorithms',
    'Problem Solving',
    'C++',
    'Java',
    'Python',
    'System Design',
  ];

  const philosophyPoints = [
    {
      title: 'Learn by Doing',
      description: 'Hands-on practice with real coding challenges and interactive examples.',
    },
    {
      title: 'Visual Learning',
      description: 'Complex concepts explained through intuitive visualizations and diagrams.',
    },
    {
      title: 'Progressive Learning',
      description: 'Structured curriculum that builds from fundamentals to advanced topics.',
    },
  ];

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-white shadow-xl'}`}>
          <div className="text-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-3xl font-bold mb-2">Pranav Arun</h2>
            <p className="text-lg opacity-80">Data Structures & Algorithms Instructor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Briefcase className="text-orange-500" size={20} />
                <span>Senior Software Engineer at Tech Corp</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-orange-500" size={20} />
                <span>B.E in CSBS at Bengaluru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-500" size={20} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={20} />
                <span>pranavarun19@gmail.com</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full ${
                      darkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="leading-relaxed">
              With over 10 years of experience in software development and teaching, I specialize in
              making complex DSA concepts accessible to students of all levels. My teaching
              philosophy focuses on practical applications and real-world problem-solving techniques.
            </p>
            <p className="leading-relaxed">
              I've helped hundreds of students master DSA concepts and succeed in technical
              interviews at top tech companies. My approach combines theoretical foundations with
              hands-on coding practice to ensure deep understanding and practical proficiency.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200/20">
            <h3 className="text-xl font-semibold mb-4">Teaching Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophyPoints.map((point) => (
                <div key={point.title} className={`p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-orange-50'}`}>
                  <h4 className="font-semibold mb-2">{point.title}</h4>
                  <p className="text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
