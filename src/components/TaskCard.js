import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TaskCard(props) {
  const [priorityColor, setPriorityColor] = useState("black");
  useEffect(() => {
    if (props.task.priority.toLowerCase() === "high") setPriorityColor("red");
    if (props.task.priority.toLowerCase() === "medium")
      setPriorityColor("#0096FF");
    if (props.task.priority.toLowerCase() === "low") setPriorityColor("green");
  }, []);
  return (
    <Link to={"/task/" + props.task.id} className="employee-card-link">
      <div className="employee-card">
        <div style={{ width: 300 }}>
          <h1>
            {props.task.id}. {props.task.description}
          </h1>
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
        <div style={{ width: 100, color: priorityColor }}>
          <h1>{props.task.priority}</h1>
        </div>
        <div style={{ width: 50 }}>
          <h1>{props.task.status === "Completed" ? "C" : "NC"}</h1>
        </div>
      </div>
    </Link>
  );
}
