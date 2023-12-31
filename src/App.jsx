import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";

const initState = {
  contentState: undefined,
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

  return (
    <div>
      <SideBar projectList={state.projects} />
    </div>
  );
};

export default App;
