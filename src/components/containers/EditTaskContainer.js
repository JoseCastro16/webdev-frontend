import { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { BiEdit, BiTrash, BiArrowBack } from "react-icons/bi";
import {
  fetchTaskThunk,
  editTaskThunk,
  fetchAllEmployeesThunk,
  fetchEmployeeThunk,
} from "../../store/thunks";
import { CgAsterisk } from "react-icons/cg";

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
    this.props.fetchEmployees();
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
        <div className="formTitle">
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            Edit Task
          </h2>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label style={{ fontWeight: "bold" }}>Description: </label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
            size
          />
          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            Priority:
            <select
              name="priority"
              value={this.state.priority}
              onChange={this.handleChange}
            >
              <option value={"Low"}>Low</option>
              <option value={"Medium"}>Medium</option>
              <option value={"High"}>High</option>
            </select>
          </label>

          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            Status:
            <select
              name="status"
              value={this.state.status}
              onChange={(e) => this.handleChange(e)}
            >
              <option value={"Completed"}>Completed</option>
              <option value={"Not Completed"}>Not Completed</option>
            </select>
          </label>

          <br />
          <br />

          <label style={{ fontWeight: "bold" }}>
            Employee :{" "}
            <select name="employeeId" onChange={(e) => this.handleChange(e)}>
              {this.props.task.employee ? (
                <option value={this.state.employeeId}>
                  {this.props.task.employee.firstname +
                    " " +
                    this.props.task.employee.lastname}{" "}
                  (current)
                </option>
              ) : (
                <option value={"Staff"}>Staff (current)</option>
              )}
              {this.props.allEmployees.map((employee) => {
                return (
                  <option value={employee.id} key={employee.id}>
                    {employee.firstname + " " + employee.lastname}
                  </option>
                );
              })}
            </select>
          </label>

          <br />
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
    allEmployees: state.allEmployees,
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    fetchEmployees: () => dispatch(fetchAllEmployeesThunk()),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditTaskContainer);
