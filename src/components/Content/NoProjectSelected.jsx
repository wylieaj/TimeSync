import Button from "../Buttons/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NoProjectSelected = ({ func }) => {
  return (
    <section className="mt-8 ml-8 w-2/3 flex flex-col text-center">
      <div className=" flex flex-col gap-2 mx-auto my-auto">
        <FontAwesomeIcon icon={faMagnifyingGlass} beat size="2xl" style={{ color: "#dddbd9" }} className="text-[12rem]" />
        <h2 className="mt-8 text-3xl text-stone-300">No project selected</h2>
        <p className="text-xl text-stone-300">Select an existing project or create a new project.</p>
        <div>
          <Button buttonLabel="Create a new project" func={func} />
        </div>
      </div>
    </section>
  );
};

export default NoProjectSelected;
