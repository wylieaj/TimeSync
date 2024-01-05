import { useRef } from "react";

const TimesheetInput = ({ addTimesheet }) => {
  const dateRef = useRef();
  const actionRef = useRef();
  const hoursRef = useRef();

  const submitTimesheet = () => {
    let dateEnt = dateRef.current.value;
    let actionEnt = actionRef.current.value;
    let hoursEnt = hoursRef.current.value;

    const timesheetData = {
      date: dateEnt,
      action: actionEnt,
      hours: hoursEnt,
    };

    if (dateEnt.trim() !== "" && actionEnt.trim() !== "" && hoursEnt.trim() !== "") {
      addTimesheet(timesheetData);
      dateEnt = "";
      actionEnt = "";
      hoursEnt = "";
    } else {
      console.log("ALL FIELDS MUST BE COMPLETED");
    }
  };
  return (
    <>
      <div className="mt-4 mb-8 flex items-end gap-6 ">
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" ref={dateRef} id="date" className="bg-stone-200 p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="action">Action Taken</label>
          <input
            placeholder="Action completed"
            name="action"
            id="action"
            ref={actionRef}
            className="bg-stone-200 p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black text-wrap"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="hours">Hours</label>
          <input
            type="text"
            name="hours"
            ref={hoursRef}
            id="hours"
            className="bg-stone-200 p-1 rounded w-8 text-center outline-none text-stone-700 focus:border-b-[1px] border-black"
            placeholder="8"
          />
        </div>
        <div className="flex flex-col">
          <button onClick={submitTimesheet} className="bg-stone-200 p-2 px-4 rounded text-sm hover:bg-stone-600 hover:text-stone-200">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default TimesheetInput;
