import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TaskCard from "../TaskCard";

const AllTasksView = (props) => {
  if (!props.allTasks.length) {
    return (
      <div>
        There are no tasks.
        <br />
        <Link to={"/"}> Go To Home</Link>
      </div>
    );
  }

  return (
    <div className="employee-card-container">
      <h1>All Tasks :</h1>
      {props.allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
};

AllTasksView.propTypes = {
  allTasks: PropTypes.array.isRequired,
};

export default AllTasksView;
