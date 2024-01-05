import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TimesheetInput = ({ addTimesheet, isErrorFunc, isError }) => {
  const [input, setInput] = useState({
    date: "",
    action: "",
    hours: "",
  });

  const dateRef = useRef();
  const actionRef = useRef();
  const hoursRef = useRef();

  const updateInput = (evt) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
  };

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
      isErrorFunc(false);
      setInput({ date: "", action: "", hours: "" });
    } else {
      isErrorFunc(true);
    }
  };

  return (
    <>
      <div className="mt-4 mb-4 w-12/12 flex items-end gap-6 flex-grow">
        <div className="flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            ref={dateRef}
            onChange={updateInput}
            value={input.date}
            id="date"
            className="text-sm outline-none text-stone-700 border-b-[1px] border-stone-700 focus:border-b-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="action">Action Taken</label>
          <input
            placeholder="Action completed"
            name="action"
            id="action"
            onChange={updateInput}
            value={input.action}
            ref={actionRef}
            className="text-sm outline-none text-stone-700 border-b-[1px] border-stone-700 focus:border-b-2 text-wrap"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="hours">Hours</label>
          <input
            type="text"
            onChange={updateInput}
            value={input.hours}
            name="hours"
            ref={hoursRef}
            id="hours"
            className="text-sm w-8 text-center outline-none text-stone-700 border-b-[1px] border-stone-700 focus:border-b-2"
            placeholder="8"
          />
        </div>
        <div className="mr-8">
          <button onClick={submitTimesheet} className="">
            <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#44403c" }} />
          </button>
        </div>
      </div>
      <div className="flex justify-center text-red-500 mb-4 text-sm ">{isError && <p>Please ensure all fields are complete.</p>}</div>
    </>
  );
};

export default TimesheetInput;
