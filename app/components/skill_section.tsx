import React from 'react';
import { Code2, Smartphone, Layout, Database, Github, Terminal } from 'lucide-react';
import skills from '../data/skills.json';

const SkillsSection = () => {
  const renderSkillItem = (skill: any) => (
    <div
      key={skill.name}
      className={`group flex items-center gap-3 p-4 rounded-lg bg-white
                  hover:bg-gray-50 transition-all duration-300 cursor-pointer
                  border border-gray-200 hover:border-gray-300 shadow-sm
                  hover:shadow-md`}
    >
      <div className="h-10 w-10 flex items-center justify-center rounded-lg 
                    bg-gray-50 group-hover:bg-white transition-colors">
        <img src={`https://skillicons.dev/icons?i=${skill.img}`} alt={skill.name}
          className={`w-6 h-6 transition-all duration-300 ${skill.color}`} />
      </div>
      <span className={`font-medium text-gray-700 ${skill.color}`}>
        {skill.name}
      </span>
    </div>
  );

  const sections = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      icon: <Layout className="w-6 h-6 text-blue-600" />,
      skills: skills.frontend_core,
      gradient: "from-blue-50 via-cyan-50 to-blue-50"
    },
    {
      title: "Development Tools",
      description: "Utilizing modern development and deployment tools",
      icon: <Github className="w-6 h-6 text-orange-600" />,
      skills: skills.tools_tech,
      gradient: "from-orange-50 via-amber-50 to-orange-50"
    },
    {
      title: "Backend Development",
      description: "Creating robust and scalable server applications",
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      skills: skills.backend_tech,
      gradient: "from-purple-50 via-pink-50 to-purple-50"
    },
    {
      title: "Database Technologies",
      description: "Managing and optimizing data storage solutions",
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: skills.database_tech,
      gradient: "from-green-50 via-emerald-50 to-green-50"
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications",
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      skills: skills.mobile_core,
      gradient: "from-indigo-50 via-violet-50 to-indigo-50"
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Technical Skills
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Specialized in modern web technologies and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {sections.map((section, idx) => (
            <div key={idx} className={`p-6 rounded-xl relative overflow-hidden
                                     bg-gradient-to-br ${section.gradient}
                                     border border-gray-200 shadow-lg`}>
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                    <p className="text-gray-600 text-sm">{section.description}</p>
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {section.skills.map(renderSkillItem)}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br 
                            from-white/50 to-transparent rounded-full transform 
                            translate-x-32 -translate-y-32 opacity-50 z-0"></div>
            </div>
          ))}
        </div>

        {/* Experience Level Indicator */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-gray-800">Experience Level</h4>
              <p className="text-gray-600">Years of professional development experience</p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-8 h-8 rounded-lg ${level <= 2
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                    : 'bg-gray-200'
                    }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
