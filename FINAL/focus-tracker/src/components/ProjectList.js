import useProjectContext from "../hooks/use-project-context";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const { projects } = useProjectContext();

  const renderedProjects = projects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });
  return <div className="grid-cols-4 gap-8">{renderedProjects}</div>;
};

export default ProjectList;
