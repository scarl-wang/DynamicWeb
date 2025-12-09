import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../ui/Button";
import ProjectCreate from "../ProjectCreate";
import ProjectList from "../ProjectList";

const Dashboard = () => {
  // track whether the Creat eProject form is visible
  const [isAddingNew, setIsAddingNew] = useState(false);

  // hide the form after a project is successfully created
  const handleProjectCreated = () => {
    setIsAddingNew(false);
  };

  const handleCancel = () => {
    setIsAddingNew(false);
  };

  return (
    <div className="bg-stone-100 min-h-screen p-8">
      {/* header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-[60px] sm:text-[80px] lg:text-[100px] text-stone-900 tracking-tight leading-none">
          THIS WEEK
        </h1>
        <Button
          primary
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="gap-2"
        >
          <Plus className="size-4" />
          New Project
        </Button>
      </div>

      {/* add project form (show when isAddingNew is true */}
      {isAddingNew && (
        <div className="mb-8 max-w-md flex gap-2">
          <ProjectCreate onProjectCreated={handleProjectCreated} />
          <Button secondary onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      )}

      <ProjectList />
    </div>
  );
};

export default Dashboard;
