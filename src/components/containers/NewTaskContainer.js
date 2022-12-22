import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import NewTaskView from "../views/NewTaskView";
import { addTaskThunk, fetchAllEmployeesThunk } from "../../store/thunks";

class NewTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      priority: "",
      status: "",
      employeeId: null,
      redirect: false,
      redirectId: null,
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    //dont need ID because the course has not been created yet
    if (this.state.description === "") {
      this.setState({
        error: "Each task must have a description",
      });
      return;
    }
    if (this.state.priority === "") {
      this.setState({
        error: "Each task must have a priority",
      });
      return;
    }
    if (this.state.status === "") {
      this.setState({
        error: "Each task must have a status",
      });
      return;
    }
    let task = {
      description: this.state.description,
      priority: this.state.priority,
      status: this.state.status,
      employeeId: this.state.employeeId,
    };

    let newTask = await this.props.addTask(task);

    this.setState({
      redirect: true,
      redirectId: newTask.id,
      error: "",
    });
  };

  componentDidMount() {
    console.log("props in new task container", this.props);
    this.props.fetchEmployees();
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single course view of newly created course
    if (this.state.redirect) {
      return <Redirect to={`/task/${this.state.redirectId}`} />;
    }
    return (
      <NewTaskView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        allEmployees={this.props.allEmployees}
      />
    );
  }
}
const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};
const mapDispatch = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTaskThunk(task)),
    fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),
  };
};

export default connect(mapState, mapDispatch)(NewTaskContainer);
