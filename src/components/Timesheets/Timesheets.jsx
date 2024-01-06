import TimesheetInput from "./TimesheetInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Timesheets = ({ timesheetObj, addTimesheet, deleteTimesheet }) => {
  const [isError, setIsError] = useState(false);

  const handleDeleteTimesheet = (timesheetId) => {
    setIsError(false);
    deleteTimesheet(timesheetId);
  };

  const updateIsError = (error) => {
    setIsError(error);
  };

  return (
    <>
      <div className="">
        <TimesheetInput addTimesheet={addTimesheet} isErrorFunc={updateIsError} isError={isError} />
      </div>

      <div className={timesheetObj.length > 12 ? "overflow-y-scroll max-h-[31rem]" : "pr-4 "}>
        {timesheetObj.length > 0 ? (
          timesheetObj.map((ts) => {
            const formattedDate = new Date(ts.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            return (
              <div key={ts.id} className="flex items-center w-12/12 gap-10 text-stone-700 pb-2 mb-2 border-b-2 border-stone-200 text-sm">
                <div className="text-nowrap pr-9">
                  <h2 className="">{formattedDate}</h2>
                </div>
                <div className="w-full">
                  <p className="w-full max-w-full text-wrap">{ts.action}</p>
                </div>
                <div>
                  <h2 className="">{ts.hours}</h2>
                </div>

                <div className="mr-4">
                  <button className="">
                    <FontAwesomeIcon
                      onClick={() => {
                        handleDeleteTimesheet(ts.id);
                      }}
                      icon={faTrash}
                      style={{ color: "#44403c" }}
                    />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center">
            <p className="text-xl text-stone-400">Use the fields above to add to this timesheet.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Timesheets;
