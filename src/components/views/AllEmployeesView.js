import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EmployeeCard from "../EmployeeCard";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return (
      <div>
        There are no employees.
        <br />
        <Link to={"/"}> Go To Home</Link>
      </div>
    );
  }

  return (
    <div className="employee-card-container">
      <h1>All Employees :</h1>
      {props.allEmployees.map((employee) => {
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={props.deleteEmployee}
          />
        );
      })}
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
