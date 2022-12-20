import { Switch, Route } from "react-router-dom";

import HomePageContainer from "./components/containers/HomePageContainer";
import AllEmployeesContainer from "./components/containers/AllEmployeesContainer";
import AllTasksContainer from "./components/containers/AllTasksContainer";
import TaskContainer from "./components/containers/TaskContainer";
import EmployeeContainer from "./components/containers/EmployeeContainer";
import EditTaskContainer from "./components/containers/EditTaskContainer";
import EditEmployeeContainer from "./components/containers/EditEmployeeContainer";
import NewEmployeeContainer from "./components/containers/NewEmployeeContainer";
import NewTaskContainer from "./components/containers/NewTaskContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/employees" component={AllEmployeesContainer} />
          <Route exact path="/tasks" component={AllTasksContainer} />
          <Route exact path="/task/:id" component={TaskContainer} />
          <Route exact path="/employee/:id" component={EmployeeContainer} />
          <Route exact path="/edittask/:id" component={EditTaskContainer} />
          <Route
            exact
            path="/editemployee/:id"
            component={EditEmployeeContainer}
          />
          <Route exact path="/newemployee" component={NewEmployeeContainer} />
          <Route exact path="/newtask" component={NewTaskContainer} />
        </Switch>
      </div>
    </>
  );
}

export default App;
