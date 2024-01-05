import { useRef, useState } from "react";
import Timesheets from "../Timesheets/Timesheets";

const SelectedProject = ({ projectObj, timesheetObj, addTimesheet, deleteTimesheet }) => {
  const formattedDate = new Date(projectObj.projectStartDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="w-2/4 mt-8 ml-8">
      <div className="border-b-2">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-stone-400">Project name</p>
            <h1 className="text-3xl text-stone-700 font-bold">{projectObj.name}</h1>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-stone-400">Start date of project</p>
            <p className="text-xl text-stone-700 font-bold ">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-stone-400">Customer</p>
            <p className="text-xl text-stone-700 font-bold">{projectObj.customer}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-stone-400">Dossier</p>
            <p className="text-lg text-stone-700 mb-2 font-bold">{projectObj.custDossier}</p>
          </div>
        </div>
      </div>
      <Timesheets timesheetObj={timesheetObj} addTimesheet={addTimesheet} deleteTimesheet={deleteTimesheet} />
    </section>
  );
};

export default SelectedProject;
