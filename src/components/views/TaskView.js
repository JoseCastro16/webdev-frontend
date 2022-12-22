import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";

const TaskView = (props) => {
  const { task, deleteTask } = props;
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
          <Link
            to={"/employee/" + task.employee.id}
            style={{ color: "blue", textDecoration: "none" }}
          >
            <h1>{task.employee.firstname + " " + task.employee.lastname} </h1>
          </Link>
        ) : (
          <h1>Staff</h1>
        )}
        <Link to={`/edittask/${task.id}`}>
          <BiEdit color="black" size={40} style={{ marginRight: 40 }} />
        </Link>
        <Link to={"/tasks"}>
          <BiTrash
            color="black"
            size={40}
            onClick={() => deleteTask(task.id)}
          />
        </Link>
      </div>
    </div>
  );
};

export default TaskView;
