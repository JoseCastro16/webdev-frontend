import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <div>
      <h1>Welcome to the Employee Management System</h1>
      <h2>Take a look at our list of Employees:</h2>
      <Link to={"/employees"} style={{ color: "white", fontSize: "2rem" }}>
        All Employees
      </Link>
      <br />
      <h2>Take a look at our list of Tasks:</h2>
      <Link to={"/tasks"} style={{ color: "white", fontSize: "2rem" }}>
        All Tasks
      </Link>
    </div>
  );
};

export default HomePageView;
