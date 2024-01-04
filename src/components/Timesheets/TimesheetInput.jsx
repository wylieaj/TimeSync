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
      <div className="mt-4 mb-8 flex items-end gap-6">
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" ref={dateRef} id="date" className="bg-stone-200 p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="action">Action Taken</label>
          <input
            placeholder="Action completed"
            name="action"
            id="action"
            ref={actionRef}
            className="bg-stone-200 w-[38rem] p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black"
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
          <button onClick={submitTimesheet} className="bg-stone-200 p-1 px-4 rounded text-sm hover:bg-stone-600 hover:text-stone-200">
            +
          </button>
        </div>
      </div>

      {/* <div className="mt-4 mb-8 flex items-center gap-8 text-stone-700 text-xl">
        <h2 className="p-1">Date</h2>
        <h2 className="w-[40rem]">Action</h2>
        <h2>Hours Taken</h2>
      </div>
      <div className="mt-4 mb-8 flex items-center gap-6">
        <input type="date" name="date" ref={dateRef} className="bg-stone-200 p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black" />
        <input placeholder="Action completed" name="action" ref={actionRef} className="bg-stone-200 w-[40rem] p-1 rounded outline-none text-stone-700 focus:border-b-[1px] border-black" />
        <input type="text" name="hours" ref={hoursRef} className="bg-stone-200 p-1 rounded w-8 text-center outline-none text-stone-700 focus:border-b-[1px] border-black" placeholder="8" />
      </div> */}
    </>
  );
};

export default TimesheetInput;
