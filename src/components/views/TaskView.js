import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: 30,
        }}
      >
        <Link to={`/tasks`}>
          <BiArrowBack color="white" size={40} />
        </Link>
      </div>
      <div>
        <h1 style={{ textDecoration: "underline" }}>{task.id}</h1>
        <h1>Description: {task.description}</h1>
        <h1>Status: {task.status}</h1>
        <h1>Priority: {task.priority}</h1>
        {task.employee ? (
          <h1>
            Employee: {task.employee.firstname + " " + task.employee.lastname}{" "}
          </h1>
        ) : (
          <h1>Employee: Unassigned</h1>
        )}
        <Link to={`/edittask/${task.id}`}>
          <BiEdit color="white" size={40} style={{ marginRight: 10 }} />
        </Link>
      </div>
    </div>
  );
};

export default TaskView;
