import { Link } from "react-router-dom";

export default function TaskCard(props) {
  return (
    <Link to={"/task/" + props.task.id} className="employee-card-link">
      <div className="employee-card">
        <div style={{ width: 75 }}>
          <h1>{props.task.id}.</h1>
        </div>
        <div style={{ width: 300 }}>
          <h1>{props.task.description}</h1>
        </div>
        <div style={{ width: 200 }}>
          {props.task.employee ? (
            <h1>
              {props.task.employee.firstname +
                " " +
                props.task.employee.lastname}
            </h1>
          ) : (
            <h1>Staff</h1>
          )}
        </div>
      </div>
    </Link>
  );
}
