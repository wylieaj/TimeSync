import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import NoProjectSelected from "./components/Content/NoProjectSelected";
import NewProject from "./components/Content/NewProject";
import SelectedProject from "./components/Content/SelectedProject";

const initState = {
  contentState: null,
  projects: [
    {
      id: 0.7829266150783314,
      name: "Castle Hotel Implementation",
      description: "Install POS system for Castle Hotel group",
      customer: "Castle Hotel",
      custDossier: "CAS-POS-001",
      projectStartDate: "2023-12-01",
    },
    {
      id: 0.3829266150783314,
      name: "Maggie's Implementation",
      description: "Install POS system for Maggie's group",
      customer: "Maggies",
      custDossier: "MAG-POS-001",
      projectStartDate: "2023-12-02",
    },
  ],
  entries: [
    {
      projectId: 0.7829266150783314,
      id: 0.08482627039725354,
      actionDate: "2023-12-01",
      actionCompleted: "Installed server",
      hoursSpent: 6,
    },
    {
      projectId: 0.7829266150783314,
      id: 0.07482627039725354,
      actionDate: "2023-12-02",
      actionCompleted: "Provided training to staff",
      hoursSpent: 2,
    },
  ],
};

const App = () => {
  const [state, setState] = useState(initState);

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
    content = <SelectedProject projectObj={state.projects.find((project) => project.id === state.contentState)} />;
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
