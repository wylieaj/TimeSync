import Button from "../Buttons/Button.jsx";

const SideBar = ({ allProjects, selectProjectFunc, func }) => {
  return (
    <aside className="w-[20rem] h-screen bg-stone-200 shadow-md">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl pt-8 font-semibold">
          <span className="text-stone-400">Time</span>
          <span className="text-stone-600">Sync</span>
        </h2>
        <Button buttonLabel="Create a new project" func={func} />
      </div>

      {allProjects.projects <= 0 ? (
        <p className="mt-16 text-center text-md text-stone-700">No projects found</p>
      ) : (
        <ul className="flex flex-col gap-4 mt-16">
          {allProjects.projects.map((project) => {
            let projectClass = "";
            if (allProjects.contentState === project.id) {
              projectClass = "text-lg text-stone-700 font-bold hover:text-stone-900 text-wrap";
            } else {
              projectClass = "text-lg text-stone-500 hover:text-stone-900";
            }
            return (
              <button key={project.id} onClick={() => selectProjectFunc(project)} className={projectClass}>
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
