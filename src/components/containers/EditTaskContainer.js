import { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import { fetchTaskThunk, editTaskThunk } from "../../store/thunks";

class EditTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      priority: "",
      status: "",
      employeeId: null,
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    //getting course ID from url
    this.props.fetchTask(this.props.match.params.id);
    this.setState({
      description: this.props.task.description,
      priority: this.props.task.priority,
      status: this.props.task.status,
      employeeId: this.props.task.employeeId,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    //get new info for course from form input
    let task = {
      id: this.props.task.id,
      description: this.state.description,
      priority: this.state.priority,
      status: this.state.status,
      employeeId: this.state.employeeId,
    };

    await this.props.editTask(task);

    this.setState({
      redirect: true,
      redirectId: this.props.task.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single course view of the edited course
    if (this.state.redirect) {
      return <Redirect to={`/task/${this.state.redirectId}`} />;
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: 30,
          }}
        >
          <Link to={`/task/` + this.props.task.id}>
            <BiArrowBack color="black" size={40} />
          </Link>
        </div>
        <h1 style={{ fontSize: "2.5rem" }}>Edit Task</h1>
        <form
          style={{ textAlign: "center" }}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <label style={{ fontWeight: "bold" }}>Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label style={{ fontWeight: "bold" }}>Priority: </label>
          <input
            type="text"
            name="priority"
            value={this.state.priority}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label style={{ fontWeight: "bold" }}>Status: </label>
          <input
            type="text"
            name="status"
            value={this.state.status}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label style={{ fontWeight: "bold" }}>EmployeeId: </label>
          <input
            type="text"
            name="employeeId"
            value={this.state.employeeId}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditTaskContainer);
