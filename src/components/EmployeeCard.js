import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function EmployeeCard(props) {
  function handleDelete() {
    props.deleteEmployee(props.employee.id);
  }
  return (
    <Link to={"/employee/" + props.employee.id} className="employee-card-link">
      <div className="employee-card">
        <div style={{ width: 75 }}>
          <h1>{props.employee.id}.</h1>
        </div>
        <div style={{ width: 200 }}>
          <h1>{props.employee.firstname + " " + props.employee.lastname}</h1>
        </div>
        <div style={{ width: 150 }}>
          {props.employee.department ? (
            <h1>{props.employee.department}</h1>
          ) : (
            <h1>No Department</h1>
          )}
        </div>
      </div>
    </Link>
  );
}
