import { Figtree } from "next/font/google";
import ProjectCard from "./components/project_card";
import projectsData from "./data/projects.json";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "900"]
});

export default function Proyects() {
  return (
    <div className={`${figtree.className} mx-auto`}>
      <h2 className="text-6xl text-center py-10">
        My Work
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
