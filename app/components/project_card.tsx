"use client"
// import { Figtree } from "next/font/google";
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ILanguajeColors {
  [key: string]: string;
}

const colorTags: ILanguajeColors = {
  javascript: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  typescript: "bg-blue-100 text-blue-800 border border-blue-200",
  nestjs: "bg-purple-100 text-purple-800 border border-purple-200",
  nextjs: "bg-gray-100 text-gray-800 border border-gray-200",
  flutter: "bg-blue-100 text-blue-800 border border-blue-200",
  python: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  dart: "bg-blue-100 text-blue-800 border border-blue-200",
  mysql: "bg-blue-100 text-blue-800 border border-blue-200",
  sqlserver: "bg-blue-100 text-blue-800 border border-blue-200",
  mongodb: "bg-green-100 text-green-800 border border-green-200",
  java: "bg-red-100 text-red-800 border border-red-200",
  nodejs: "bg-green-100 text-green-800 border border-green-200",
  react: "bg-blue-100 text-blue-800 border border-blue-200",
  html: "bg-orange-100 text-orange-800 border border-orange-200",
  css: "bg-blue-100 text-blue-800 border border-blue-200",
  redis: "bg-red-100 text-red-800 border border-red-200",
  tailwind: "bg-cyan-100 text-cyan-800 border border-cyan-200",
};

interface IProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  features: string[];
  isPrivate: boolean;
  thumbnail: string;
}

const ProjectCard = ({ id, title, description, tags, features, isPrivate, thumbnail }: IProjectData) => {
  const router = useRouter();

  function handleClickProject() {
    router.push(`/detail-project/${id}`);
    console.log("Click en el proyecto");
    console.log(id);
  }

  return (
    <div className="w-full group cursor-pointer" onClick={handleClickProject}>
      <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 relative h-full">
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
          <img
            src={`/images/${thumbnail}`}
            alt={`${title} Preview`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
              <div className="flex gap-2">
                <Github className="w-5 h-5 text-white opacity-75 hover:opacity-100 cursor-pointer transform hover:scale-110 transition-all" />
                <ExternalLink className="w-5 h-5 text-white opacity-75 hover:opacity-100 cursor-pointer transform hover:scale-110 transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full ${colorTags[tag.toLowerCase()]} 
                          transition-all duration-300 hover:scale-105`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-3 group/feature">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 group-hover/feature:scale-110 transition-transform" />
                <span className="text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Repository Status */}
          <div className="flex items-center justify-between">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                          ${isPrivate
                ? "bg-red-50 text-red-700 border border-red-100"
                : "bg-emerald-50 text-emerald-700 border border-emerald-100"
              }`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-2 
                            ${isPrivate ? "bg-red-500" : "bg-emerald-500"}`} />
              {isPrivate ? "Private" : "Public"} Repository
            </div>

            <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 
                             transition-colors group/button">
              <span>View Details</span>
              <ArrowUpRight className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 
                                     transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProjectCard;
