import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EmployeeCard from "../EmployeeCard";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return (
      <div style={{ fontSize: "2rem" }}>
        There are no employees.
        <br />
        <Link to={"/"} style={{ fontSize: "2rem", color: "white" }}>
          {" "}
          Go To Home
        </Link>
      </div>
    );
  }

  return (
    <div className="employee-card-container">
      <h1 style={{ textDecoration: "underline" }}>All Employees</h1>
      {props.allEmployees
        .sort(function (a, b) {
          return a.id - b.id;
        })
        .map((employee) => {
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
