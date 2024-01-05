import TimesheetInput from "./TimesheetInput";

const Timesheets = ({ timesheetObj, addTimesheet }) => {
  return (
    <>
      <TimesheetInput addTimesheet={addTimesheet} />
      <div className={timesheetObj.length > 10 ? "overflow-y-scroll max-h-[29rem]" : ""}>
        {timesheetObj.length > 0 &&
          timesheetObj.map((ts) => {
            return (
              <div key={ts.id} className="flex items-start gap-6 text-stone-700 pb-2 mb-2 border-b-2 border-stone-200">
                <h2 className=" pl-1 w-[150px]">{ts.date}</h2>
                <p className="pl-1 w-[38rem] max-w-[38rem]] text-wrap">{ts.action}</p>
                <h2 className="pl-1">{ts.hours}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Timesheets;
