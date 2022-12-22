import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import EmployeeCard from "../EmployeeCard";
import { BiPlus } from "react-icons/bi";

const AllEmployeesView = (props) => {
  if (!props.allEmployees.length) {
    return (
      <div>
        <h1>There are currently no employees.</h1>
        <br />
        <Link
          to={"/newemployee"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="add-container">
            <BiPlus size={"2rem"} />
            <h2>Add Employee</h2>
          </div>
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
          <BiPlus size={"2rem"} />
          <h2>Add Employee</h2>
        </div>
      </Link>
    </>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
