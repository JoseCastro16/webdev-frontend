import { Switch, Route } from "react-router-dom";

import HomePageContainer from "./components/containers/HomePageContainer";
import AllEmployeesContainer from "./components/containers/AllEmployeesContainer";
import AllTasksContainer from "./components/containers/AllTasksContainer";
import TaskContainer from "./components/containers/TaskContainer";
import EmployeeContainer from "./components/containers/EmployeeContainer";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/employees" component={AllEmployeesContainer} />
          <Route exact path="/tasks" component={AllTasksContainer} />
          <Route exact path="/task/:id" component={TaskContainer} />
          <Route exact path="/employee/:id" component={EmployeeContainer} />
        </Switch>
      </div>
    </>
  );
}

export default App;
