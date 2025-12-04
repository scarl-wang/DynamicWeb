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

  return (
    <div className="bg-white min-h-screen p-[72px]">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-[80px]">This Week</h1>
        <Button onClick={() => setIsAddingNew(!isAddingNew)} className="gap-2">
          <Plus className="size-4" />
          Add Project
        </Button>
      </div>

      {isAddingNew && (
        <div className="mb-8 max-w-md flex gap-2">
          <ProjectCreate onProjectCreated={handleProjectCreated} />
        </div>
      )}

      <ProjectList />
    </div>
  );
};

export default Dashboard;
