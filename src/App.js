import { Switch, Route } from "react-router-dom";

import HomePageContainer from "./components/containers/HomePageContainer";
import AllEmployeesContainer from "./components/containers/AllEmployeesContainer";
import AllTasksContainer from "./components/containers/AllTasksContainer";

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/employees" component={AllEmployeesContainer} />
          <Route exact path="/tasks" component={AllTasksContainer} />
        </Switch>
      </div>
    </>
  );
}

export default App;
