import Button from "../Buttons/Button.jsx";

const SideBar = ({ projectList, func }) => {
  return (
    <aside className="w-[20rem] h-screen bg-stone-200 shadow-2xl">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl pt-8 font-semibold">
          <span className="text-stone-400">Time</span>
          <span className="text-stone-600">Sync</span>
        </h2>
        <Button buttonLabel="Create" func={func} />
      </div>

      {projectList <= 0 ? (
        <p className="mt-16 text-center text-xl text-stone-700">No projects found</p>
      ) : (
        <ul className="flex flex-col gap-4 mt-16">
          {projectList.map((project) => {
            return (
              <button key={project.id} className="text-lg text-stone-500 hover:text-stone-900 focus:text-stone-900 focus:font-bold">
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
