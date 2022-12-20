import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TaskCard from "../TaskCard";
import { BiPlus } from "react-icons/bi";

const AllTasksView = (props) => {
  if (!props.allTasks.length) {
    return (
      <div style={{ fontSize: "2rem" }}>
        There are no tasks.
        <br />
        <Link
          to={"/newtask"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="add-container">
            <BiPlus size={"3rem"} />
            <h1>Add Task</h1>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="employee-card-container">
      <h1 style={{ textDecoration: "underline" }}>All Tasks</h1>
      {props.allTasks
        .sort(function (a, b) {
          return a.id - b.id;
        })
        .map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      <Link to={"/newtask"} style={{ textDecoration: "none", color: "black" }}>
        <div className="add-container">
          <BiPlus size={"3rem"} />
          <h1>Add Task</h1>
        </div>
      </Link>
    </div>
  );
};

AllTasksView.propTypes = {
  allTasks: PropTypes.array.isRequired,
};

export default AllTasksView;
