import { useRef } from "react";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";

const NewProject = ({ addProject, cancelProject }) => {
  const nameRef = useRef();
  const startDateRef = useRef();
  const customerRef = useRef();
  const dossierRef = useRef();
  const descriptionRef = useRef();

  const submitProject = () => {
    const projectName = nameRef.current.value;
    const projectStartDate = startDateRef.current.value;
    const projectCustomer = customerRef.current.value;
    const projectDossier = dossierRef.current.value;
    const projectDescription = descriptionRef.current.value;

    if (projectName === "" || projectCustomer === "" || projectDescription === "" || projectDossier === "" || projectStartDate === "") {
      console.log("ERROR, all fields must be filled");
    } else {
      const projectData = {
        name: projectName,
        description: projectDescription,
        customer: projectCustomer,
        custDossier: projectDossier,
        projectStartDate: projectStartDate,
      };

      addProject(projectData);
    }
  };

  return (
    <section className="w-2/3 my-auto">
      <div className="flex justify-center gap-24">
        <Input labelName="Project Name" inputLink="name" ref={nameRef} />
        <Input labelName="Start Date" inputLink="projectStartDate" type="date" ref={startDateRef} />
      </div>
      <div className="flex justify-center gap-24 mt-8">
        <Input labelName="Customer" inputLink="customer" ref={customerRef} />
        <Input labelName="Dossier" inputLink="custDossier" ref={dossierRef} />
      </div>
      <div className="flex justify-center gap-24 mt-8">
        <Input labelName="Project Description" inputLink="description" isTextArea ref={descriptionRef} />
      </div>
      <div className="flex justify-center gap-24 mt-16">
        <Button buttonLabel="Submit" func={submitProject} />
        <button onClick={cancelProject} className="text-lg text-stone-700 hover:text-red-600">
          Cancel
        </button>
      </div>
    </section>
  );
};

export default NewProject;
