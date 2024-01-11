import { createContext, useState } from "react";

export const ProjectContext = createContext({
  contentState: null,
  projects: [],
  timesheets: [],
});

export function ProjectContextProvider({ children }) {
  const [state, setState] = useState({
    contentState: null,
    projects: [],
    timesheets: [],
  });

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

  const deleteProject = (projectId) => {
    if (projectId === state.contentState) {
      setState((prevState) => {
        return {
          ...prevState,
          projects: prevState.projects.filter((project) => projectId !== project.id),
          contentState: null,
        };
      });
      setState((prevState) => {
        return {
          ...prevState,
          timesheets: prevState.timesheets.filter((ts) => projectId !== ts.projectId),
        };
      });
    }
  };

  const displayProject = (selectedProject) => {
    setState((prevState) => {
      return {
        ...prevState,
        contentState: selectedProject.id,
      };
    });
  };

  const valueCtx = {
    contentState: state.contentState,
    projects: state.projects,
    timesheets: state.timesheets,
    displayProject: displayProject,
    createProject: handleNewProject,
    addProject: addProject,
    cancelProject: cancelNewProject,
    deleteProject: deleteProject,
    addTimesheet: addTimesheetEntry,
    deleteTimesheet: deleteTimesheetEntry,
    selectedProject: state.projects.find((project) => project.id === state.contentState),
    selectedProjectsTimesheets: state.timesheets.filter((timesheet) => timesheet.projectId === state.contentState),
  };

  return <ProjectContext.Provider value={valueCtx}>{children}</ProjectContext.Provider>;
}
