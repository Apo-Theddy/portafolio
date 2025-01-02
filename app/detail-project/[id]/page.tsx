"use client";
import React from 'react';
import { ArrowLeft, Code, Lock } from 'lucide-react';
import Navigation from '@/app/components/nav';
import { Figtree } from 'next/font/google';
import { redirect, useParams } from 'next/navigation';
import Logo from '../../../public/images/logo.png';
import projects from '../../data/projects.json';

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ProjectDetail = () => {
  const params = useParams();

  if (!params.id || !parseInt(params.id.toString())) {
    redirect("/");
  }

  const project = projects.find((project) => project.id === parseInt(params.id!.toString()));

  if (!project) {
    redirect("/");
  }

  return <>
    <Navigation
      handleAboutMeSection={() => { redirect("/#about") }}
      handleContactSection={() => { redirect("/#contact") }}
      handleProjectsSection={() => { redirect("/#projects") }}
      handleIndexSection={() => { redirect("/#index") }}
      handleSkillsSection={() => { redirect("/#skills") }}
      handleServicesSection={() => { redirect("/#services") }}
      fontClass={figtree.className}
      logoSrc={Logo.src}
    />

    <div className="max-w-screen-xl mx-auto min-h-screen w-full px-4 py-6 lg:px-6 bg-white">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Hero Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-12 relative min-h-[300px]">
          <div className="absolute w-full lg:w-1/2 h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl">
            <div className="p-4 lg:p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <button className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors">
                  <ArrowLeft className="text-white" size={20} />
                </button>
                {project.isPrivate && (
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Lock size={14} /> Private Project
                  </span>
                )}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-blue-100 text-sm lg:text-base max-w-md">{project.description}</p>
            </div>
          </div>
          <div className="relative z-10 bg-white rounded-3xl shadow-lg h-full transform
                         transition-all duration-700 ease-in-out
                         hover:translate-x-[25%] lg:hover:translate-x-1/3
                         hover:cursor-pointer">
            <img
              src={`/images/${project.thumbnail}`}
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="h-full flex flex-col">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              {project.features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 items-center">
                  <Code className="text-blue-600 shrink-0" />
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-lg p-6 text-white">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Tech Stack</h3>
            <div className="space-y-4">
              {project.tags.map((tech, index) => (
                <div key={index} className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                  <span className="text-sm lg:text-base">{tech}</span>
                  <Code size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-white rounded-3xl shadow-lg p-6 lg:p-8">
          <div className="h-full flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden aspect-video">
                  <img
                    src={`/images/${image}`}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </>;
};

export default ProjectDetail;
