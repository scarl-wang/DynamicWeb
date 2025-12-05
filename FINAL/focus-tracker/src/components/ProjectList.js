import useProjectContext from "../hooks/use-project-context";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const { projects } = useProjectContext();

  const renderedProjects = projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });
  return (
    <div
      className="grid grid-cols-3 gap-4
  "
    >
      {renderedProjects}
    </div>
  );
};

export default ProjectList;
