import { useRef, useState } from "react";
import Timesheets from "../Timesheets/Timesheets";

const SelectedProject = ({ projectObj, timesheetObj, addTimesheet }) => {
  const formattedDate = new Date(projectObj.projectStartDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="w-2/4 mt-8 ml-8">
      <div className="border-b-2 pb-8">
        <h1 className="text-3xl text-stone-700 font-bold">{projectObj.name}</h1>
        <div className="flex items-center justify-between mb-8">
          <p className="text-xl text-stone-400 ">{projectObj.customer}</p>
          <p className="text-xl text-stone-400 ">{formattedDate}</p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-xl text-stone-700 ">Project Description</h2>
          <p className="text-lg text-stone-700 mb-2">{projectObj.custDossier}</p>
        </div>
        <div>
          <p className="text-lg text-stone-400 whitespace-pre-wrap">{projectObj.description} </p>
        </div>
      </div>
      <Timesheets timesheetObj={timesheetObj} addTimesheet={addTimesheet} />
    </section>
  );
};

export default SelectedProject;
