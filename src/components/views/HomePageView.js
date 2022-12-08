import { Link } from "react-router-dom";

const HomePageView = () => {
  return (
    <div>
      <h1>Welcome to the Employee Management System</h1>
      <p>Take a look at our list of Employees:</p>
      <Link to={"/employees"} className="employee-card-link">
        All Employees
      </Link>
    </div>
  );
};

export default HomePageView;
