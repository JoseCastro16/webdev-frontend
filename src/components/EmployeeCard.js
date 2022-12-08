import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function EmployeeCard(props) {
  function handleDelete() {
    props.deleteEmployee(props.employee.id);
  }
  return (
    <Link to={"/employee/" + props.employee.id} className="employee-card-link">
      <div className="employee-card">
        <h1>{props.employee.id}.</h1>
        <h1>{props.employee.firstname + " " + props.employee.lastname}</h1>
        {props.employee.department ? (
          <h2>{props.employee.department}</h2>
        ) : (
          <h2>No Department</h2>
        )}
      </div>
    </Link>
  );
}
