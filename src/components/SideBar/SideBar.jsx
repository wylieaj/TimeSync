const SideBar = ({ projectList }) => {
  console.log(projectList);
  return (
    <aside className="w-[20rem] h-screen bg-stone-200 shadow-2xl">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className="text-3xl pt-8 uppercase text-stone-700 font-semibold">Projects</h2>
        <div className=" flex flex-col mt-4 gap-2 text-center">
          <button className="py-2 px-16 rounded-md bg-stone-300 text-xl hover:bg-stone-500 hover:text-stone-200 hover:font-bold">&#43;</button>
          <p className="text-stone-700">Add new project</p>
        </div>
      </div>

      {projectList <= 0 ? (
        <p className="mt-16 text-center text-xl text-stone-700">No projects found</p>
      ) : (
        <ul className="flex flex-col gap-4 mt-16">
          {projectList.map((project) => {
            return (
              <button key={project.id} className="text-lg py-4 text-stone-500 hover:text-stone-700 focus:bg-stone-300 focus:text-stone-700">
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
