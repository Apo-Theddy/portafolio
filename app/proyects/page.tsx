import { Figtree } from "next/font/google";
import ProjectCard from "../components/project_card";
import projectsData from "../data/projects.json";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "900"]
});

export default function Proyects() {
  return (
    <div className={`${figtree.className} mx-auto font-bold flex justify-center flex-col items-center`}>
      <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-transparent bg-clip-text inline-block transform hover:scale-105 transition-transform duration-300 min-h-20 text-center my-5">
        Mi Trabajo
      </h2>

      <div className="p-2 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            features={project.features}
            isPrivate={project.isPrivate}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
