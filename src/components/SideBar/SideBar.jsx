import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";
import Button from "../Buttons/Button.jsx";

const SideBar = () => {
  const projectCtx = useContext(ProjectContext);

  return (
    <aside className="w-[20rem] h-screen bg-stone-200 shadow-md">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl pt-8 font-semibold">
          <span className="text-stone-400">Time</span>
          <span className="text-stone-600">Sync</span>
        </h2>
        <Button buttonLabel="Create a new project" />
      </div>

      {projectCtx.projects <= 0 ? (
        <p className="mt-16 text-center text-md text-stone-700">No projects found</p>
      ) : (
        <ul className="flex flex-col gap-4 mt-16">
          {projectCtx.projects.map((project) => {
            let projectClass = "";
            if (projectCtx.contentState === project.id) {
              projectClass = "text-sm text-stone-700 font-bold hover:text-stone-900 text-wrap";
            } else {
              projectClass = "text-sm text-stone-500 hover:text-stone-900";
            }
            return (
              <button key={project.id} onClick={() => projectCtx.displayProject(project)} className={projectClass}>
                {project.name}
              </button>
            );
          })}
        </ul>
      )}
    </aside>
  );
};

export default SideBar;
