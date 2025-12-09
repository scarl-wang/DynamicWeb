import useProjectContext from "../hooks/use-project-context";
import useSessionContext from "../hooks/use-sessions-context";
import ProjectItem from "./ProjectItem";

// color palette: dark green (most time) to yellow (least time)
const projectColors = [
  "bg-lime-900", // green - most time invested
  "bg-lime-800",
  "bg-lime-700",
  "bg-lime-600",
  "bg-lime-500",
  "bg-yellow-500",
  "bg-yellow-400", // yellow - least time invested
];

const ProjectList = () => {
  const { projects } = useProjectContext();
  const { getTotalProjectTime } = useSessionContext();

  const sortedProjects = projects
    .map((project) => ({
      ...project,
      totalTime: getTotalProjectTime(project.id),
    }))
    // sorting the projects based on total project time
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // sort by value: items.sort((a, b) => a.value - b.value)
    .sort((a, b) => b.totalTime - a.totalTime); // descending sort, most time first

  const renderedProjects = sortedProjects.map((project, index) => {
    // cycle through the colors
    // if there are more than 7 projects, roject 8 gets color 1 again
    const colorClass = projectColors[index % projectColors.length];

    return (
      <ProjectItem key={project.id} project={project} colorClass={colorClass} />
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {renderedProjects}
    </div>
  );
};

export default ProjectList;
