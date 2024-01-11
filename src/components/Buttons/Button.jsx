import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";

const Button = ({ buttonLabel = "Placeholder" }) => {
  const { createProject } = useContext(ProjectContext);
  return (
    <button onClick={createProject} className="py-2 px-8 text-sm rounded-md shadow-sm bg-stone-300 text-stone-500 hover:bg-stone-400 hover:text-stone-900">
      {buttonLabel}
    </button>
  );
};

export default Button;
