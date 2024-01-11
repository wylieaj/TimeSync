import { useRef, useState, useContext } from "react";
import { ProjectContext } from "../store/project-context";
import Input from "../Inputs/Input";

const NewProject = () => {
  const { addProject, cancelProject } = useContext(ProjectContext);
  const [isError, setIsError] = useState(false);

  const nameRef = useRef();
  const startDateRef = useRef();
  const customerRef = useRef();
  const dossierRef = useRef();

  const submitProject = () => {
    const projectName = nameRef.current.value;
    const projectStartDate = startDateRef.current.value;
    const projectCustomer = customerRef.current.value;
    const projectDossier = dossierRef.current.value;

    if (projectName === "" || projectCustomer === "" || projectDossier === "" || projectStartDate === "") {
      setIsError(true);
    } else {
      setIsError(false);
      const projectData = {
        name: projectName,
        customer: projectCustomer,
        custDossier: projectDossier,
        projectStartDate: projectStartDate,
      };

      addProject(projectData);
    }
  };

  return (
    <section className="w-2/3 my-auto">
      <div className="flex justify-center gap-24 mb-8">
        <Input labelName="Project Name" inputLink="name" ref={nameRef} />
        <Input labelName="Start Date" inputLink="projectStartDate" type="date" ref={startDateRef} />
      </div>
      <div className="flex justify-center gap-24 mb-8">
        <Input labelName="Customer" inputLink="customer" ref={customerRef} />
        <Input labelName="Dossier" inputLink="custDossier" ref={dossierRef} />
      </div>
      {isError && (
        <div className="flex justify-center my-2">
          <p className="text-red-500 text-sm">Please ensure all fields are complete.</p>
        </div>
      )}
      <div className="flex justify-center gap-24 mt-8">
        <button onClick={submitProject} className="text-lg text-stone-700 hover:text-green-600">
          Submit
        </button>
        <button onClick={cancelProject} className="text-lg text-stone-700 hover:text-red-600">
          Cancel
        </button>
      </div>
    </section>
  );
};

export default NewProject;
