import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk, deleteTaskThunk } from "../../store/thunks";
import TaskView from "../views/TaskView";

class TaskContainer extends Component {
  componentDidMount() {
    //getting course ID from url
    this.props.fetchTask(this.props.match.params.id);
  }
  render() {
    return (
      <TaskView task={this.props.task} deleteTask={this.props.deleteTask} />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    deleteTask: (id) => dispatch(deleteTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);
