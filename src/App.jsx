import { useContext } from "react";
import SideBar from "./components/SideBar/SideBar";
import NoProjectSelected from "./components/Content/NoProjectSelected";
import NewProject from "./components/Content/NewProject";
import SelectedProject from "./components/Content/SelectedProject";
import { ProjectContext } from "./components/store/project-context";

const App = () => {
  const projectCtx = useContext(ProjectContext);

  let content = "";
  if (projectCtx.contentState === null) {
    content = <NoProjectSelected />;
  } else if (projectCtx.contentState === undefined) {
    content = <NewProject />;
  } else if (projectCtx.contentState !== null || projectCtx.contentState !== undefined) {
    content = <SelectedProject />;
  }
  return (
    <div
      className="flex
    ">
      <SideBar />
      {content}
    </div>
  );
};

export default App;
