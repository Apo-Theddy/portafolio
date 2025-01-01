"use client";
import React from 'react';
import { ArrowLeft, BarChart, Code, Layout, Users, Lock } from 'lucide-react';
import Navigation from '@/app/components/nav';
import { Figtree } from 'next/font/google';
import { redirect, useParams } from 'next/navigation';
import Logo from '../../../public/images/logo.png';
import projects from '../../data/projects.json';


export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

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

    <div className="max-w-screen-xl mx-auto min-h-screen w-full p-4 md:p-6 bg-white">
      <section className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 auto-rows-auto md:grid-rows-12 min-h-screen gap-4 md:gap-6">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 md:row-span-4 relative min-h-[300px] md:min-h-0">
          <div className="absolute w-full md:w-1/2 h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl max-h-[30rem]">
            <div className="p-4 md:p-8 text-white">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{project.title}</h2>
              <p className="text-blue-100 text-sm md:text-base text-wrap w-1/2">{project.description}</p>
            </div>
          </div>
          <div
            className="relative z-10 bg-white rounded-3xl shadow-lg h-full transform
                max-h-[30rem]
                       transition-all duration-700 ease-in-out
                       hover:translate-x-[50%] sm:hover:translate-x-[25%] md:hover:translate-x-1/3
                       hover:cursor-pointer"
          >
            <img
              src={`/images/${project.thumbnail}`}
              alt={project.title}
              className="w-full h-full object-cover rounded-3xl max-h-[30rem]"
            />
          </div>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-8 md:row-span-4 bg-white rounded-3xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
          <div className="h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow">
              {project.features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 items-center">
                  <Code className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-2xl text-gray-600">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-4 lg:col-span-4 md:row-span-5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-lg p-4 md:p-6 text-white">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Tech Stack</h3>
            <div className="space-y-4">
              {project.tags.map((tech, index) => (
                <div key={index} className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                  <span className="text-sm md:text-base">{tech}</span>
                  <Code size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-8 md:row-span-8 bg-white rounded-3xl shadow-lg p-4 md:p-8">
          <div className="h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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

        <div className="col-span-4 md:col-span-4 lg:col-span-4 md:row-span-7 bg-white rounded-3xl shadow-lg p-4 md:p-6 text-white">
          <div className="h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Project Info</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm md:text-base">Private Project</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm md:text-base">Real-time Updates</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm md:text-base">Location Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  </>
};

export default ProjectDetail;
