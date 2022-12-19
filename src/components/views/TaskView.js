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
          <BiArrowBack color="black" size={40} />
        </Link>
      </div>
      <div>
        <h1 style={{ textDecoration: "underline" }}>{task.id}</h1>
        <h1>{task.description}</h1>
        <h1> {task.status}</h1>
        <h1> {task.priority}</h1>
        {task.employee ? (
          <h1>{task.employee.firstname + " " + task.employee.lastname} </h1>
        ) : (
          <h1>Unassigned</h1>
        )}
        <Link to={`/edittask/${task.id}`}>
          <BiEdit color="black" size={40} style={{ marginRight: 10 }} />
        </Link>
        <BiTrash color="black" size={40} />
      </div>
    </div>
  );
};

export default TaskView;
