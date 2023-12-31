import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import NoProjectSelected from "./components/Content/NoProjectSelected";
import NewProject from "./components/Content/NewProject";

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

  let content = "";
  if (state.contentState === null) {
    content = <NoProjectSelected addNewProjectFunc={handleNewProject} />;
  } else if (state.contentState === undefined) {
    content = <NewProject />;
  }

  return (
    <div
      className="flex
    ">
      <SideBar projectList={state.projects} addNewProjectFunc={handleNewProject} />
      {content}
    </div>
  );
};

export default App;
