"use client";
import React from 'react';
import { Card, Badge, Carousel, Button } from 'flowbite-react';
import { FaExpand } from 'react-icons/fa';

const ProjectCarousel = ({ project }: any) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Card className="w-full overflow-hidden shadow-lg rounded-xl">
          <div className="aspect-video relative">
            <Carousel
              slide={false}
              indicators={true}
              className="rounded-xl"
            >
              {project.images.map((image: any, index: number) => (
                <div key={index} className="relative h-full group">
                  <img
                    src={`https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg`}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Button
                      size="lg"
                      className="!p-3 !bg-white/20 hover:!bg-white/30 backdrop-blur-md border border-white/30"
                    >
                      <FaExpand className="w-5 h-5 text-white" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm bg-black/50 p-2 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Imagen {index + 1} de {project.images.length}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCarousel;
