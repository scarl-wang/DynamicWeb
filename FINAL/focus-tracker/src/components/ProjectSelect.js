import useProjectContext from "../hooks/use-project-context";

const ProjectSelect = ({ value, onChange }) => {
  const { projects } = useProjectContext();

  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-2 border-black rounded-md px-2 py-2"
      >
        <option value="">Select a project...</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectSelect;
