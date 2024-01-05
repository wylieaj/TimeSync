import TimesheetInput from "./TimesheetInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Timesheets = ({ timesheetObj, addTimesheet, deleteTimesheet }) => {
  return (
    <>
      <div className="">
        <TimesheetInput addTimesheet={addTimesheet} />
      </div>

      <div className={timesheetObj.length > 11 ? "overflow-y-scroll max-h-[29rem]" : "pr-4"}>
        {timesheetObj.length > 0 &&
          timesheetObj.map((ts) => {
            const formattedDate = new Date(ts.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            });
            return (
              <div key={ts.id} className="flex items-center w-12/12 gap-10 text-stone-700 pb-2 mb-2 border-b-2 border-stone-200">
                <div className="text-nowrap pr-12">
                  <h2 className=" pl-1">{formattedDate}</h2>
                </div>
                <div className="w-full">
                  <p className="pl-1 w-full max-w-full text-wrap">{ts.action}</p>
                </div>
                <div>
                  <h2 className="pl-1">{ts.hours}</h2>
                </div>

                <div className="mr-4">
                  <button className="">
                    <FontAwesomeIcon
                      onClick={() => {
                        deleteTimesheet(ts.id);
                      }}
                      icon={faTrash}
                    />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Timesheets;
