import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to the Employee Management System</h1>
      <h2>Take a look at our list of employees:</h2>
      <Link
        to={"/employees"}
        style={{ color: "blue", fontSize: "2rem", textDecoration: "none" }}
      >
        Employees
      </Link>
      <br />
      <h2>Take a look at our list of tasks:</h2>
      <Link
        to={"/tasks"}
        style={{ color: "blue", fontSize: "2rem", textDecoration: "none" }}
      >
        Tasks
      </Link>
    </div>
  );
};

export default HomePageView;
