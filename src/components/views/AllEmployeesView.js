import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import EmployeeCard from "../EmployeeCard";
import { BiPlus } from "react-icons/bi";

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
    <>
      <div className="one">
        <h1>Employees</h1>
      </div>
      <div className="employee-card-container">
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
      <Link
        to={"/newemployee"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="add-container">
          <BiPlus size={"3rem"} />
          <h1>Add Employee</h1>
        </div>
      </Link>
    </>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
