import { Link } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";

const TaskView = (props) => {
  const { task, deleteTask } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Link to={`/tasks`}>
          <BiArrowBack color="black" size={40} />
        </Link>
        <Link to={`/edittask/${task.id}`}>
          <BiEdit color="#0096FF" size={40} />
        </Link>
        <Link to={"/tasks"}>
          <BiTrash color="red" size={40} onClick={() => deleteTask(task.id)} />
        </Link>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "Courier, sans-serif",
            fontSize: "2.5rem",
            color: "#11153e",
          }}
        >
          Task {task.id}
        </h1>
        <h2 style={{ textDecoration: "underline" }}>Description</h2>
        <h1>{task.description}</h1>
        <h2 style={{ textDecoration: "underline" }}>Status</h2>
        <h1> {task.status}</h1>
        <h2 style={{ textDecoration: "underline" }}>Priority</h2>
        <h1> {task.priority}</h1>
        <h2 style={{ textDecoration: "underline" }}>Employee</h2>
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
      </div>
    </div>
  );
};

export default TaskView;
