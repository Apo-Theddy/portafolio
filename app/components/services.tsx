import React, { useState } from 'react';

type Skill = {
  name: string;
  color: string;
  img: string;
};

type ServiceCategory = {
  title: string;
  description: string;
  tagline: string;
  features: string[];
};

type SkillsData = {
  [key: string]: Skill[];
};

type ServiceCategories = {
  [key: string]: ServiceCategory;
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend_core');

  const skills: SkillsData = {
    "frontend_core": [
      { "name": "HTML5", "color": "text-[#E34F26] border-[#E34F26]", "img": "html" },
      { "name": "CSS3", "color": "text-[#1572B6] border-[#1572B6]", "img": "css" },
      { "name": "JavaScript", "color": "text-[#F7DF1E] border-[#F7DF1E]", "img": "js" },
      { "name": "TypeScript", "color": "text-[#3178C6] border-[#3178C6]", "img": "ts" },
      { "name": "React", "color": "text-[#61DAFB] border-[#61DAFB]", "img": "react" },
      { "name": "Next.js", "color": "text-[#000000] border-[#000000]", "img": "next" },
      { "name": "Tailwind", "color": "text-[#38B2AC] border-[#38B2AC]", "img": "tailwind" }
    ],
    "mobile_core": [
      { "name": "Flutter", "color": "text-[#02569B] border-[#02569B]", "img": "flutter" },
      { "name": "Dart", "color": "text-[#0175C2] border-[#0175C2]", "img": "dart" }
    ],
    "backend_tech": [
      { "name": "Node.js", "color": "text-[#339933] border-[#339933]", "img": "nodejs" },
      { "name": "Express", "color": "text-[#000000] border-[#000000]", "img": "express" },
      { "name": "NestJS", "color": "text-[#E0234E] border-[#E0234E]", "img": "nestjs" },
      { "name": "Python", "color": "text-[#3776AB] border-[#3776AB]", "img": "python" }
    ],
    "database_tech": [
      { "name": "MongoDB", "color": "text-[#47A248] border-[#47A248]", "img": "mongodb" },
      { "name": "MySQL", "color": "text-[#4479A1] border-[#4479A1]", "img": "mysql" },
      { "name": "Redis", "color": "text-[#DC382D] border-[#DC382D]", "img": "redis" }
    ],
    "tools_tech": [
      { "name": "Git", "color": "text-[#F05032] border-[#F05032]", "img": "git" },
      { "name": "Docker", "color": "text-[#2496ED] border-[#2496ED]", "img": "docker" },
      { "name": "Firebase", "color": "text-[#FFCA28] border-[#FFCA28]", "img": "firebase" },
      { "name": "AWS", "color": "text-[#FF9900] border-[#FF9900]", "img": "aws" },
      { "name": "GitHub", "color": "text-[#181717] border-[#181717]", "img": "github" },
      { "name": "VS Code", "color": "text-[#007ACC] border-[#007ACC]", "img": "vscode" },
      { "name": "Postman", "color": "text-[#FF6C37] border-[#FF6C37]", "img": "postman" }
    ]
  };

  const serviceCategories: ServiceCategories = {
    frontend_core: {
      title: "Frontend",
      description: "Creación de interfaces modernas y responsivas con las últimas tecnologías web",
      tagline: "Interfaces modernas y atractivas",
      features: ["Diseño Responsive", "Optimización SEO", "Alto Rendimiento", "Best Practices"]
    },
    mobile_core: {
      title: "Móvil",
      description: "Aplicaciones móviles multiplataforma con experiencias de usuario excepcionales",
      tagline: "Apps multiplataforma",
      features: ["Multiplataforma", "UI/UX Moderno", "Push Notifications", "Rendimiento Nativo"]
    },
    backend_tech: {
      title: "Backend",
      description: "Servicios backend escalables y robustos para aplicaciones de alto rendimiento",
      tagline: "Backend robusto y escalable",
      features: ["Alta Disponibilidad", "Escalabilidad", "APIs REST", "Microservicios"]
    },
    database_tech: {
      title: "Databases",
      description: "Sistemas de gestión de datos eficientes y seguros para todo tipo de aplicaciones",
      tagline: "Datos seguros y eficientes",
      features: ["Optimización", "Backups", "Alta Disponibilidad", "Seguridad"]
    },
    tools_tech: {
      title: "Herramientas",
      description: "Automatización y optimización de procesos de desarrollo para máxima eficiencia",
      tagline: "Automatización y eficiencia",
      features: ["Monitoreo", "Cloud"]
    }
  };

  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-b from-gray-50  to-white relative overflow-hidden h-full">
      {/* Fondo decorativo */}
      {/* <div className="absolute inset-0 h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div> */}

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Servicios Tecnológicos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas modernas para proyectos de cualquier escala
          </p>
        </div>

        {/* Tabs de navegación */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-md'}
              `}
            >
              {category.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Grid de contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card principal */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {serviceCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {serviceCategories[activeCategory].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {serviceCategories[activeCategory].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Stack Tecnológico</h4>
              <div className="flex flex-wrap gap-3">
                {skills[activeCategory].map((skill) => (
                  <span
                    key={skill.name}
                    className={`
                      px-4 py-2 rounded-lg border bg-white
                      ${skill.color} border-opacity-20 hover:border-opacity-100
                      transition-all duration-300 cursor-pointer
                    `}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card lateral */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="h-full flex flex-col">
              <h4 className="text-xl font-bold mb-6">Beneficios de nuestros servicios</h4>

              <div className="space-y-6 flex-grow">
                {[
                  {
                    title: "Calidad Premium",
                    desc: "Código limpio y optimizado"
                  },
                  {
                    title: "Best Practices",
                    desc: "Siguiendo los mejores estándares"
                  },
                  {
                    title: "Tecnología Moderna",
                    desc: "Stack tecnológico actualizado"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-sm font-bold shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h5 className="font-semibold mb-1">{item.title}</h5>
                      <p className="text-blue-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
