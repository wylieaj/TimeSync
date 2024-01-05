import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import NoProjectSelected from "./components/Content/NoProjectSelected";
import NewProject from "./components/Content/NewProject";
import SelectedProject from "./components/Content/SelectedProject";

const initState = {
  contentState: null,
  projects: [
    {
      id: 123456789,
      name: "Westfield Simphony Implementation",
      customer: "Westfield Group",
      custDossier: "WEST-POS-001",
      projectStartDate: "2022-11-01",
    },
  ],
  timesheets: [
    {
      id: 987654321,
      projectId: 123456789,
      date: "2022-11-20",
      action: "Installed server",
      hours: "8",
    },
  ],
};

const App = () => {
  const [state, setState] = useState(initState);

  const addTimesheetEntry = (timesheetData) => {
    const id = Math.random();
    setState((prevState) => {
      const newTimesheet = {
        id: id,
        projectId: prevState.contentState,
        ...timesheetData,
      };
      return {
        ...prevState,
        timesheets: [...prevState.timesheets, newTimesheet],
      };
    });
  };

  const deleteTimesheetEntry = (timesheetId) => {
    setState((prevState) => {
      return {
        ...prevState,
        timesheets: prevState.timesheets.filter((ts) => timesheetId !== ts.id),
      };
    });
  };

  const handleNewProject = () => {
    setState((prevState) => {
      return {
        ...prevState,
        contentState: undefined,
      };
    });
  };

  const cancelNewProject = () => {
    setState((prevState) => {
      return {
        ...prevState,
        contentState: null,
      };
    });
  };

  const addProject = (projectData) => {
    const prodId = Math.random();
    setState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, { id: prodId, ...projectData }],

        contentState: prodId,
      };
    });
    setState;
  };

  const displayProject = (selectedProject) => {
    setState((prevState) => {
      return {
        ...prevState,
        contentState: selectedProject.id,
      };
    });
  };

  let content = "";
  if (state.contentState === null) {
    content = <NoProjectSelected func={handleNewProject} />;
  } else if (state.contentState === undefined) {
    content = <NewProject addProject={addProject} cancelProject={cancelNewProject} />;
  } else if (state.contentState !== null || state.contentState !== undefined) {
    content = (
      <SelectedProject
        projectObj={state.projects.find((project) => project.id === state.contentState)}
        timesheetObj={state.timesheets.filter((timesheet) => timesheet.projectId === state.contentState)}
        addTimesheet={addTimesheetEntry}
        deleteTimesheet={deleteTimesheetEntry}
      />
    );
  }

  return (
    <div
      className="flex
    ">
      <SideBar allProjects={state} selectProjectFunc={displayProject} func={handleNewProject} />
      {content}
    </div>
  );
};

export default App;
