import useProjectContext from "../hooks/use-project-context";

const ProjectSelect = ({ value, onChange }) => {
  const { projects } = useProjectContext();

  return (
    <div>
      <select
        value={value}
        onChange={(e) => {
          console.log("Selected value:", e.target.value); // for debugging
          onChange(e.target.value);
        }}
        className="w-full border-2 border-stone-900 bg-stone-100 px-2 py-2"
      >
        <option value="" className="text-stone-500">
          Select a project...
        </option>
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
