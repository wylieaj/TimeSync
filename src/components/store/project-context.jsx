import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
  contentState: null,
  projects: [],
  timesheets: [],
});

function projectReducer(state, action) {
  if (action.type === "ADD_TIMESHEET") {
    const id = Math.random();
    const newTimesheet = {
      id: id,
      projectId: state.contentState,
      ...action.payload,
    };
    return {
      ...state,
      timesheets: [...state.timesheets, newTimesheet],
    };
  }

  if (action.type === "DELETE_TIMESHEET") {
    return {
      ...state,
      timesheets: state.timesheets.filter((ts) => action.payload !== ts.id),
    };
  }

  if (action.type === "NEW_PROJECT_FORM") {
    return {
      ...state,
      contentState: undefined,
    };
  }

  if (action.type === "CANCEL_PROJECT") {
    return {
      ...state,
      contentState: null,
    };
  }

  if (action.type === "ADD_PROJECT") {
    const prodId = Math.random();
    return {
      ...state,
      projects: [...state.projects, { id: prodId, ...action.payload }],
      contentState: prodId,
    };
  }

  if (action.type === "DELETE_PROJECT") {
    if (action.payload === state.contentState) {
      return {
        ...state,
        timesheets: state.timesheets.filter((ts) => action.payload !== ts.projectId),
        projects: state.projects.filter((project) => action.payload !== project.id),
        contentState: null,
      };
    }
  }

  if (action.type === "DISPLAY_PROJECT") {
    return {
      ...state,
      contentState: action.payload.id,
    };
  }
  return state;
}

export function ProjectContextProvider({ children }) {
  const [projectState, dispatch] = useReducer(projectReducer, { contentState: null, projects: [], timesheets: [] });

  const addTimesheetEntry = (timesheetData) => {
    dispatch({
      type: "ADD_TIMESHEET",
      payload: timesheetData,
    });
  };

  const deleteTimesheetEntry = (timesheetId) => {
    dispatch({
      type: "DELETE_TIMESHEET",
      payload: timesheetId,
    });
  };

  const handleNewProject = () => {
    dispatch({
      type: "NEW_PROJECT_FORM",
    });
  };

  const cancelNewProject = () => {
    dispatch({
      type: "CANCEL_PROJECT",
    });
  };

  const addProject = (projectData) => {
    dispatch({
      type: "ADD_PROJECT",
      payload: projectData,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: "DELETE_PROJECT",
      payload: projectId,
    });
  };

  const displayProject = (selectedProject) => {
    dispatch({
      type: "DISPLAY_PROJECT",
      payload: selectedProject,
    });
  };

  const valueCtx = {
    contentState: projectState.contentState,
    projects: projectState.projects,
    timesheets: projectState.timesheets,
    displayProject: displayProject,
    createProject: handleNewProject,
    addProject: addProject,
    cancelProject: cancelNewProject,
    deleteProject: deleteProject,
    addTimesheet: addTimesheetEntry,
    deleteTimesheet: deleteTimesheetEntry,
    selectedProject: projectState.projects.find((project) => project.id === projectState.contentState),
    selectedProjectsTimesheets: projectState.timesheets.filter((timesheet) => timesheet.projectId === projectState.contentState),
  };

  return <ProjectContext.Provider value={valueCtx}>{children}</ProjectContext.Provider>;
}
